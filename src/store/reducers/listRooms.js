import { TYPES } from "store/constants";

const initValue = {
  listRooms: [],
};

export const listRoomsReducer = (state = initValue, action) => {
  switch (action.type) {
    case TYPES.LIST_ROOMS_REQUEST:
      return { ...state, listRooms: [] };

    case TYPES.LIST_ROOMS_SUCCESS:
      return { ...state, listRooms: action.payload };

    case TYPES.LIST_ROOMS_FAILED:
      return { ...state };

    default:
      return { ...state };
  }
};
