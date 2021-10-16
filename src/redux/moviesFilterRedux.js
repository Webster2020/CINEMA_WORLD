// --- S E L E C T O R S --- //

export const getSortedCaptions = ({ movies }) => movies.map(movie => movie.caption).sort();

export const getSortedUniqueTypes = ({ movies }) => {
  const sortedTypes = movies.map(movie => movie.type).sort();
  const uniqueTypes = sortedTypes.filter(
    (item, i, arr) => arr.indexOf(item) === i
  );
  return uniqueTypes;
};

export const getSortedUniqueYears = ({ movies }) => {
  const sortedYears = movies.map(movie => movie.year).sort();
  const uniqueYears = sortedYears.filter(
    (item, i, arr) => arr.indexOf(item) === i
  );
  return uniqueYears;
};

// --- R E D U C E R S --- //

const reducerName = 'movies';

const createActionName = name => `app/${reducerName}/${name}`;

export const SELECT_TITLE = createActionName('SELECT_TITLE');
export const SELECT_TYPE = createActionName('SELECT_TYPE');
export const SELECT_YEAR = createActionName('SELECT_YEAR');

export const createActionSelectTitle = payload => ({
  payload,
  type: SELECT_TITLE,
});

export const createActionSelectType = payload => ({
  payload,
  type: SELECT_TYPE,
});

export const createActionSelectYear = payload => ({
  payload,
  type: SELECT_YEAR,
});

export default function moviesFilterReducer(statePart = [], action = {}) {
  switch (action.type) {
    case SELECT_TITLE:
      return { ...statePart, title: action.payload };
    case SELECT_TYPE:
      return { ...statePart, type: action.payload };
    case SELECT_YEAR:
      return { ...statePart, year: action.payload };
    default:
      return statePart;
  }
}
