// --- S E L E C T O R S --- //

export const getSeatsByRoom = (rooms, roomId) => rooms.find(room => room.id === roomId).seats;

// --- R E D U C E R S --- //

const reducerName = 'seat';

const createActionName = name => `app/${reducerName}/${name}`;

export const SELECT_SEAT = createActionName('SELECT_SEAT');
export const UNSELECT_SEAT = createActionName('UNSELECT_SEAT');
export const CLEAR_SEAT = createActionName('CLEAR_SEAT');
export const BOOK_SEAT = createActionName('BOOK_SEAT');

export const createActionSelectSeat = payload => ({
  payload,
  type: SELECT_SEAT,
});
export const createActionUnselectSeat = payload => ({
  payload,
  type: UNSELECT_SEAT,
});
export const createActionClearSeat = payload => ({
  payload,
  type: CLEAR_SEAT,
});
export const createActionAddSeatToBooked = payload => ({
  payload,
  type: BOOK_SEAT,
});

export default function seatsSelectorReducer(statePart = [], action = {}) {
  switch (action.type) {
    case SELECT_SEAT:
      return {
        ...statePart,
        selected: [...statePart.selected, action.payload],
      };
    case UNSELECT_SEAT:
      return {
        ...statePart,
        selected: [
          ...statePart.selected.filter(item => action.payload !== item),
        ],
      };
    case CLEAR_SEAT:
      return {
        ...statePart,
        selected: [],
      };
    case BOOK_SEAT:
      return {
        ...statePart,
        booked: [...statePart.booked, ...action.payload],
      };
    default:
      return statePart;
  }
}
