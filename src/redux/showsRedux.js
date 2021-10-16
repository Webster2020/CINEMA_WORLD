import { getHoursFromFilteredShows } from '../utils/sortShows';

// --- S E L E C T O R S --- //

export const getHoursByMovie = (movies, shows, day) =>
  movies
    .map((movie) => movie.id)
    .map((movieId) => getHoursFromFilteredShows(shows, day, movieId));

export const getDaysFromShows = (shows) => Object.keys(shows);

// --- R E D U C E R S --- //

const reducerName = 'shows';

const createActionName = (name) => `app/${reducerName}/${name}`;

export const SELECT_DAY = createActionName('SELECT_DAY');
export const SELECT_HOUR = createActionName('SELECT_HOUR');
export const SELECT_MOVIE = createActionName('SELECT_MOVIE');

export const createActionSelectDay = (payload) => ({
  payload,
  type: SELECT_DAY,
});

export const createActionSelectHour = (payload) => ({
  payload,
  type: SELECT_HOUR,
});

export const createActionSelectMovie = (payload) => ({
  payload,
  type: SELECT_MOVIE,
});

export default function showsFilterReducer(statePart = [], action = {}) {
  console.log('3) reducer run [showsRedux]');
  switch (action.type) {
    case SELECT_DAY:
      console.log('4) statePart [showsRedux]');
      console.log(statePart);
      console.log('5) payload [showsRedux]');
      console.log(action.payload);
      return { ...statePart, day: action.payload };
    case SELECT_HOUR:
      console.log('4) statePart [showsRedux]');
      console.log(statePart);
      console.log('5) payload [showsRedux]');
      console.log(action.payload);
      return { ...statePart, hour: action.payload };
    case SELECT_MOVIE:
      console.log('4) statePart [showsRedux]');
      console.log(statePart);
      console.log('5) payload [showsRedux]');
      console.log(action.payload);
      return { ...statePart, movie: action.payload };
    default:
      console.log('default statePart [showsRedux]');
      console.log(statePart);
      return statePart;
  }
}
