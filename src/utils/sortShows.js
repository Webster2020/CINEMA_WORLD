const filterShowsByIdAndDay = (shows, day, id) => {
  return shows[day].filter(show => {
    return show.movies.indexOf(id) !== -1;
  });
};

export const getHoursFromFilteredShows = (shows, day, id) =>
  filterShowsByIdAndDay(shows, day, id).map(elem => elem.hour);
