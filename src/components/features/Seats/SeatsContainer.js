import { connect } from 'react-redux';
import Seats from './Seats';
import {
  getSeatsByRoom,
  createActionSelectSeat,
  createActionUnselectSeat,
} from '../../../redux/seatsRedux';

const mapStateToProps = (state) => ({
  allState: state,
  seats: getSeatsByRoom(state.rooms, 1),
  bookedSeats: state.seats.booked,
  //selectedSeat: state.showsFilter.day
});

const mapDispatchToProps = (dispatch) => {
  return {
    selectSeatDispatch: (elem) => {
      console.log(
        `2) dispach selectSeatDispatch run [seatsContainer] (${elem})`
      );
      return dispatch(createActionSelectSeat(elem));
    },
    unselectSeatDispatch: (elem) => {
      console.log(
        `2) dispach unselectSeatDispatch run [seatsContainer] (${elem})`
      );
      return dispatch(createActionUnselectSeat(elem));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Seats);
