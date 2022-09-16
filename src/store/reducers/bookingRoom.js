import { TYPES } from "store/constants";

const initValue = {
  bookingRoom: {},
};

export const bookingRoomReducer = (state = initValue, action) => {
  switch (action.type) {
    case TYPES.BOOKING_ROOM_REQUEST:
      return { ...state, bookingRoom: [] };

    case TYPES.BOOKING_ROOM_SUCCESS:
      return { ...state, bookingRoom: action.payload };

    case TYPES.BOOKING_ROOMS_FAILED:
      return { ...state };

    default:
      return { ...state };
  }
};
