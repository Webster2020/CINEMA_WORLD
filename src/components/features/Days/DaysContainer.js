import { connect } from 'react-redux';
import Days from './Days';
import { getDaysFromShows, createActionSelectDay } from '../../../redux/showsRedux';

const mapStateToProps = state => ({
  days: getDaysFromShows(state.shows),
  selectedDay: state.showsFilter.day,
});

const mapDispatchToProps = dispatch => ({
  selectDayDispatch: elem => dispatch(createActionSelectDay(elem)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Days);
