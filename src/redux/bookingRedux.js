// --- S E L E C T O R S --- //

// export const getBookedData = ({ user }) => user;
export const getBookedData = ({ user, showsFilter }) => {
  return { ...user, ...showsFilter };
};

// --- R E D U C E R S --- //

const reducerName = 'booking';

const createActionName = (name) => `app/${reducerName}/${name}`;

export const BOOKED_SEATS = createActionName('BOOKED_SEATS');

export const createActionBookedSeats = (payload) => ({
  payload,
  type: BOOKED_SEATS,
});

export default function bookingReducer(statePart = [], action = {}) {
  console.log('3) reducer run [bookingRedux]');
  switch (action.type) {
    case BOOKED_SEATS:
      console.log('4) statePart BOOKED [bookingRedux]');
      console.log(statePart);
      console.log('5) payload BOOKED [bookingRedux]');
      console.log(action.payload);
      return {
        name: action.payload.name,
        email: action.payload.email,
        seats: [...action.payload.seats],
      };
    default:
      console.log('default statePart [bookingRedux]');
      console.log(statePart);
      return statePart;
  }
}
