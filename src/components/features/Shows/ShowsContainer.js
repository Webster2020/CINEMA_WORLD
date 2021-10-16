import { connect } from 'react-redux';
import Shows from './Shows';
import {
  createActionSelectHour,
  createActionSelectMovie,
} from '../../../redux/showsRedux';

const mapStateToProps = (state) => ({
  selectedDay: state.showsFilter.hour,
});

const mapDispatchToProps = (dispatch) => {
  return {
    selectHourDispatch: (elem) => {
      console.log(
        `2) dispach selectHourDispatch run [showsContainer] (${elem})`
      );
      return dispatch(createActionSelectHour(elem));
    },
    selectMovieDispatch: (elem) => {
      console.log(
        `2) dispach selectMovieDispatch run [showsContainer] (${elem})`
      );
      return dispatch(createActionSelectMovie(elem));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Shows);
