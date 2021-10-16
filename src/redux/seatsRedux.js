// --- S E L E C T O R S --- //

export const getSeatsByRoom = (rooms, roomId) =>
  rooms.find((room) => room.id === roomId).seats;

// --- R E D U C E R S --- //

const reducerName = 'seat';

const createActionName = (name) => `app/${reducerName}/${name}`;

export const SELECT_SEAT = createActionName('SELECT_SEAT');
export const UNSELECT_SEAT = createActionName('UNSELECT_SEAT');
export const CLEAR_SEAT = createActionName('CLEAR_SEAT');
export const BOOK_SEAT = createActionName('BOOK_SEAT');

export const createActionSelectSeat = (payload) => ({
  payload,
  type: SELECT_SEAT,
});
export const createActionUnselectSeat = (payload) => ({
  payload,
  type: UNSELECT_SEAT,
});
export const createActionClearSeat = (payload) => ({
  payload,
  type: CLEAR_SEAT,
});
export const createActionAddSeatToBooked = (payload) => ({
  payload,
  type: BOOK_SEAT,
});

export default function seatsSelectorReducer(statePart = [], action = {}) {
  console.log('3) reducer run [roomsRedux]');
  switch (action.type) {
    case SELECT_SEAT:
      console.log('4) statePart SELECT [roomsRedux]');
      console.log(statePart);
      console.log('5) payload SELECT [roomsRedux]');
      console.log(action.payload);
      // return [...statePart, action.payload];
      return {
        ...statePart,
        selected: [...statePart.selected, action.payload],
      };
    case UNSELECT_SEAT:
      console.log('4) statePart UNSELECT [roomsRedux]');
      console.log(statePart);
      console.log('5) payload UNSELECT [roomsRedux]');
      console.log(action.payload);
      // return [statePart.filter((item) => action.payload !== item)];
      return {
        ...statePart,
        selected: [
          ...statePart.selected.filter((item) => action.payload !== item),
        ],
      };
    case CLEAR_SEAT:
      console.log('4) statePart CLEAR [roomsRedux]');
      console.log(statePart);
      console.log('5) payload CLEAR [roomsRedux]');
      console.log(action.payload);
      return {
        ...statePart,
        selected: [],
      };
    case BOOK_SEAT:
      console.log('4) statePart SELECT [roomsRedux]');
      console.log(statePart);
      console.log('5) payload SELECT [roomsRedux]');
      console.log(action.payload);
      // return [...statePart, action.payload];
      return {
        ...statePart,
        booked: [...statePart.booked, ...action.payload],
      };
    default:
      console.log('default statePart [roomsRedux]');
      console.log(statePart);
      return statePart;
  }
}
//state.items.filter(item => action.payload !== item)

// return (statePart) => {
//   statePart.splice(statePart.indexOf(action.payload), 1);
//   return statePart;
// };

// return (
//   statePart.indexOf(action.payload) !== -1 &&
//   statePart.splice(statePart.indexOf(action.payload), 1)
// );

// ((clickedSeats) => {
//   clickedSeats.splice(clickedSeats.indexOf(elem), 1);
//   console.log('clickedSeats');
//   console.log(clickedSeats);
//   return clickedSeats;

// return statePart
// .slice(0, action.index)
// .concat(statePart.slice(action.index + 1));

// const index = array.indexOf(3);
// if (index !== -1) {
//   array.splice(index, 1);
// }
