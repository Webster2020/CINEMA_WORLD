import { connect } from 'react-redux';
import Form from './Form';
import { createActionBookedSeats } from '../../../redux/bookingRedux';
import { createActionClearSeat, createActionAddSeatToBooked } from '../../../redux/seatsRedux';

const mapStateToProps = state => ({
  seatsSelected: state.seats.selected,
});

const mapDispatchToProps = dispatch => ({
  setBookingDataDispatch: data => dispatch(createActionBookedSeats(data)),
  clearSeatDispatch: () => dispatch(createActionClearSeat()),
  setSeatToBookedDispatch: data => dispatch(createActionAddSeatToBooked(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
