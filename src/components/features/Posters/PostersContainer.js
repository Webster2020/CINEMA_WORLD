import { connect } from 'react-redux';
import Posters from './Posters';
import {
  getPostersByTitle,
  getPostersByType,
  getPostersByYear,
} from '../../../redux/postersRedux';
import { getHoursByMovie } from '../../../redux/showsRedux';

// const mapStateToProps = (state) => ({
//   movies: state.movies,
//   captions: state.movies.map((movie) => movie.caption)
// });

const mapStateToProps = (state) => {
  console.log('6) map state to props run [MoviesFilterContainer]');
  console.log('7) New state (after reduce) [MoviesFilterContainer]');
  console.log(state.movies);
  console.log(state.shows);
  const title = state.moviesFilter.title;
  const type = state.moviesFilter.type;
  const year = state.moviesFilter.year;
  const day = state.showsFilter.day;
  return {
    movies: state.movies,
    filteredMovies: getPostersByYear(
      getPostersByType(getPostersByTitle(state.movies, title), type),
      year
    ),
    shows: state.shows,
    filteredHours: getHoursByMovie(state.movies, state.shows, day),
  };
};

export default connect(mapStateToProps)(Posters);
