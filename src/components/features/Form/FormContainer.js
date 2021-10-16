import { connect } from 'react-redux';
import Form from './Form';
import { createActionBookedSeats } from '../../../redux/bookingRedux';
import {
  createActionClearSeat,
  createActionAddSeatToBooked,
} from '../../../redux/seatsRedux';

const mapStateToProps = (state) => ({
  seatsSelected: state.seats.selected,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setBookingDataDispatch: (data) => {
      console.log(
        `2) dispach selectSeatDispatch run [seatsContainer] (${data})`
      );
      return dispatch(createActionBookedSeats(data));
    },
    clearSeatDispatch: () => {
      console.log(
        `2) dispach selectSeatDispatch run [formContainer] - clearing`
      );
      return dispatch(createActionClearSeat());
    },
    setSeatToBookedDispatch: (data) => {
      console.log(
        `2) dispach selectSeatDispatch run [seatsContainer] (${data})`
      );
      return dispatch(createActionAddSeatToBooked(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
