//import shortid from 'shortid';

// --- S E L E C T O R S --- //

export const getSortedCaptions = ({ movies }) =>
  movies.map((movie) => movie.caption).sort();

export const getSortedUniqueTypes = ({ movies }) => {
  const sortedTypes = movies.map((movie) => movie.type).sort();
  const uniqueTypes = sortedTypes.filter(
    (item, i, arr) => arr.indexOf(item) === i
  );
  return uniqueTypes;
};

export const getSortedUniqueYears = ({ movies }) => {
  const sortedYears = movies.map((movie) => movie.year).sort();
  const uniqueYears = sortedYears.filter(
    (item, i, arr) => arr.indexOf(item) === i
  );
  return uniqueYears;
};

// --- R E D U C E R S --- //

const reducerName = 'movies';

const createActionName = (name) => `app/${reducerName}/${name}`;

export const SELECT_TITLE = createActionName('SELECT_TITLE');
export const SELECT_TYPE = createActionName('SELECT_TYPE');
export const SELECT_YEAR = createActionName('SELECT_YEAR');

export const createActionSelectTitle = (payload) => ({
  payload,
  type: SELECT_TITLE,
});

export const createActionSelectType = (payload) => ({
  payload,
  type: SELECT_TYPE,
});

export const createActionSelectYear = (payload) => ({
  payload,
  type: SELECT_YEAR,
});

export default function moviesFilterReducer(statePart = [], action = {}) {
  console.log('3) reducer run [moviesFilterRedux]');
  switch (action.type) {
    case SELECT_TITLE:
      console.log('4) statePart [moviesFilterRedux]');
      console.log(statePart);
      console.log('5) payload [moviesFilterRedux]');
      console.log(action.payload);
      return { ...statePart, title: action.payload };
    case SELECT_TYPE:
      console.log('4) statePart [moviesFilterRedux]');
      console.log(statePart);
      console.log('5) payload [moviesFilterRedux]');
      console.log(action.payload);
      return { ...statePart, type: action.payload };
    case SELECT_YEAR:
      console.log('4) statePart [moviesFilterRedux]');
      console.log(statePart);
      console.log('5) payload [moviesFilterRedux]');
      console.log(action.payload);
      return { ...statePart, year: action.payload };
    default:
      console.log('default statePart [moviesFilterRedux]');
      console.log(statePart);
      return statePart;
  }
}
