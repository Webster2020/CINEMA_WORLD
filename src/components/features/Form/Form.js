import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Form.module.scss';
import Input from '../../common/Input/Input';
import CheckBox from '../../common/CheckBox/CheckBox';
import Book from '../../common/Book/Book';
import ValidMessage from '../../common/ValidMessage/ValidMessage';

const Form = ({
  seatsSelected,
  setBookingDataDispatch,
  clearSeatDispatch,
  setSeatToBookedDispatch,
}) => {
  useEffect(() => {
    console.log(seatsSelected);
  });
  const [formValid, setFormValid] = useState(false);
  const [inputNameValue, setInputNameValue] = useState('');

  const [inputEmailValue, setInputEmailValue] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [error, setError] = useState('');

  const [checkBoxValue, setCheckBoxValue] = useState(false);

  const handleChangeName = (event) => {
    setInputNameValue(event.target.value.replace(/[^A-Za-z]/gi, ''));
  };

  const handleChangeEmail = (event) => {
    const emailRegex = /\S+@\S+\.\S+/;
    if (emailRegex.test(event.target.value)) {
      setIsEmailValid(true);
      setError('');
    } else {
      setIsEmailValid(false);
      setError('invalidEmail');
    }
    setInputEmailValue(event.target.value);
  };

  const handleChangeCheckBox = () => {
    setCheckBoxValue(!checkBoxValue);
  };

  const validation = (event) => {
    event.preventDefault();
    console.log('checking form validation!');
    console.log(seatsSelected);
    setFormValid(false);
    if (seatsSelected.length === 0) {
      setError('noSeat');
      console.log('noSeat error');
      console.log(error);
    } else if (inputNameValue === '') {
      setError('emptyName');
    } else if (inputEmailValue === '') {
      setError('emptyEmail');
    } else if (!isEmailValid) {
      setError('invalidEmail');
    } else if (!checkBoxValue) {
      setError('unchecked');
    } else {
      console.log('everything is OK!');
      setBookingDataDispatch({
        name: inputNameValue,
        email: inputEmailValue,
        seats: seatsSelected,
      });
      setError('');
      setFormValid(true);
    }
  };

  const submit = (event) => {
    setInputNameValue('');
    setInputEmailValue('');
    setCheckBoxValue(false);
    setSeatToBookedDispatch(seatsSelected);
    clearSeatDispatch();
  };

  return (
    <div className={styles.formWrapper}>
      <form>
        <Input
          inputType={'text'}
          inputName={'name'}
          inputValue={inputNameValue}
          handleChangeValue={handleChangeName}
        />
        {error === 'emptyName' && (
          <ValidMessage variant={error} text='empty name!' />
        )}
        <Input
          inputType={'text'}
          inputName={'email'}
          inputValue={inputEmailValue}
          handleChangeValue={handleChangeEmail}
        />
        {error === 'emptyEmail' && (
          <ValidMessage variant={error} text='empty email!' />
        )}
        {error === 'invalidEmail' && (
          <ValidMessage variant={error} text='invalid email!' />
        )}
        <CheckBox
          inputType={'checkbox'}
          inputName={'checkbox'}
          inputValue={checkBoxValue}
          handleChangeValue={handleChangeCheckBox}
        />
        {error === 'unchecked' && (
          <ValidMessage variant={error} text='check it!' />
        )}
        {!formValid && (
          <Book text={'CHECK FORM'} onClick={(e) => validation(e)} />
        )}
        {formValid && <Book text={'BOOK TICKETS'} onClick={(e) => submit(e)} />}
        {error === 'noSeat' && (
          <ValidMessage variant={error} text='select seat!' />
        )}
      </form>
    </div>
  );
};

Form.propTypes = {
  seatsSelected: PropTypes.array,
  clearSeatDispatch: PropTypes.func,
  setSeatToBookedDispatch: PropTypes.func,
  setBookingDataDispatch: PropTypes.func,
};

export default Form;
