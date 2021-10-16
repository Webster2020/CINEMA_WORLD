import { connect } from 'react-redux';
import Seats from './Seats';
import { getSeatsByRoom, createActionSelectSeat, createActionUnselectSeat } from '../../../redux/seatsRedux';

const mapStateToProps = state => ({
  seats: getSeatsByRoom(state.rooms, 1),
  bookedSeats: state.seats.booked,
});

const mapDispatchToProps = dispatch => ({
  selectSeatDispatch: elem => dispatch(createActionSelectSeat(elem)),
  unselectSeatDispatch: elem => dispatch(createActionUnselectSeat(elem)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Seats);
