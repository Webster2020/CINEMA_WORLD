// --- S E L E C T O R S --- //

export const getPostersByTitle = (movies, title) =>
  movies.filter((movie) => (title === '' ? movie : movie.caption === title));

export const getPostersByType = (movies, type) =>
  movies.filter((movie) => (type === '' ? movie : movie.type === type));

export const getPostersByYear = (movies, year) =>
  movies.filter((movie) => (year === '' ? movie : movie.year === year));

// export const getPostersByTitle = ({ movies }, title) => {
//   console.log('TEST START');
//   console.log(title);
//   console.log(
//     movies.filter((movie) => {
//       console.log(movie.caption);
//       console.log(movie.caption === title);
//       return movie.caption === title;
//     })
//   );
//   console.log('TEST END');
//   return movies.filter((movie) => movie.caption === title);
// };
