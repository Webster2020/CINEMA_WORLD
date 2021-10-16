import { combineReducers, createStore } from 'redux';
import initialStoreData from '../data/initialStoreData';
import moviesFilterReducer from './moviesFilterRedux';
import showsFilterReducer from './showsRedux';
import seatsSelectorReducer from './seatsRedux';
import bookingReducer from './bookingRedux';

const initialState = {
  movies: initialStoreData.movies,
  moviesCounter: {
    types: [],
    years: [],
  },
  moviesFilter: {
    title: '',
    type: '',
    year: '',
  },
  rooms: initialStoreData.rooms,
  seats: {
    booked: [],
    selected: [],
  },
  shows: initialStoreData.shows,
  showsFilter: {
    day: 'monday',
    hour: '',
    movie: '',
  },
  user: {
    name: '',
    email: '',
    seats: [],
  },
};

const reducers = {
  moviesFilter: moviesFilterReducer,
  showsFilter: showsFilterReducer,
  seats: seatsSelectorReducer,
  user: bookingReducer,
};

// *add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach((item) => {
  if (typeof reducers[item] === 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

const storeReducer = combineReducers(reducers);

const store = createStore(
  storeReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
