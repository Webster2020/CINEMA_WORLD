import { movies } from './dbMovies';
import { rooms } from './dbRooms';
import { shows } from './dbShows';

const initialStoreData = {
  movies: [...movies],
  rooms: [...rooms],
  shows: { ...shows },
};

export default initialStoreData;
