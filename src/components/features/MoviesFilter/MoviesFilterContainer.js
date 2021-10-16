import { connect } from 'react-redux';
import MoviesFilter from './MoviesFilter';
import {
  getSortedCaptions,
  getSortedUniqueTypes,
  getSortedUniqueYears,
  createActionSelectTitle,
  createActionSelectType,
  createActionSelectYear,
} from '../../../redux/moviesFilterRedux';

const mapStateToProps = state => ({
  stateAll: state,
  captions: getSortedCaptions(state),
  types: getSortedUniqueTypes(state),
  years: getSortedUniqueYears(state),
});

const mapDispatchToProps = dispatch => ({
  selectTitleDispatch: elem => dispatch(createActionSelectTitle(elem)),
  selectTypeDispatch: elem => dispatch(createActionSelectType(elem)),
  selectYearDispatch: elem => dispatch(createActionSelectYear(elem)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesFilter);
