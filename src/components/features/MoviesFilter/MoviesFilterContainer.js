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

// const mapStateToProps = (state) => ({
//   movies: state.movies,
//   captions: state.movies.map((movie) => movie.caption)
// });

const mapStateToProps = (state) => {
  // const arr = state.movies.map((movie) => movie.caption);
  console.log('6) map state to props run [MoviesFilterContainer]');
  console.log('7) New state (after reduce) [MoviesFilterContainer]');
  console.log(state.movies);
  return {
    stateAll: state,
    // movies: state.movies,
    captions: getSortedCaptions(state),
    types: getSortedUniqueTypes(state),
    years: getSortedUniqueYears(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectTitleDispatch: (elem) => {
      console.log(
        `2) dispach selectTitleDispatch run [MoviesFilterContainer] (${elem})`
      );
      return dispatch(createActionSelectTitle(elem));
    },
    selectTypeDispatch: (elem) => {
      console.log(
        `2) dispach selectTitleDispatch run [MoviesFilterContainer] (${elem})`
      );
      return dispatch(createActionSelectType(elem));
    },
    selectYearDispatch: (elem) => {
      console.log(
        `2) dispach selectTitleDispatch run [MoviesFilterContainer] (${elem})`
      );
      return dispatch(createActionSelectYear(elem));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesFilter);
