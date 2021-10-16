import { connect } from 'react-redux';
import Posters from './Posters';
import { getPostersByTitle, getPostersByType, getPostersByYear } from '../../../redux/postersRedux';
import { getHoursByMovie } from '../../../redux/showsRedux';

const mapStateToProps = state => {
  const title = state.moviesFilter.title;
  const type = state.moviesFilter.type;
  const year = state.moviesFilter.year;
  const day = state.showsFilter.day;
  return {
    movies: state.movies,
    filteredMovies: getPostersByYear(getPostersByType(getPostersByTitle(state.movies, title), type), year),
    shows: state.shows,
    filteredHours: getHoursByMovie(state.movies, state.shows, day),
  };
};

export default connect(mapStateToProps)(Posters);
