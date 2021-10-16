import { connect } from 'react-redux';
import Shows from './Shows';
import { createActionSelectHour, createActionSelectMovie } from '../../../redux/showsRedux';

const mapStateToProps = state => ({
  selectedDay: state.showsFilter.hour,
});

const mapDispatchToProps = dispatch => ({
  selectHourDispatch: elem => dispatch(createActionSelectHour(elem)),
  selectMovieDispatch: elem => dispatch(createActionSelectMovie(elem)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Shows);
