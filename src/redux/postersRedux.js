// --- S E L E C T O R S --- //

export const getPostersByTitle = (movies, title) => movies.filter(movie => (title === '' ? movie : movie.caption === title));
export const getPostersByType = (movies, type) => movies.filter(movie => (type === '' ? movie : movie.type === type));
export const getPostersByYear = (movies, year) => movies.filter(movie => (year === '' ? movie : movie.year === year));
