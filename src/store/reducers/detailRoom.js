import { TYPES } from "store/constants";

const initValue = {
  detailRoom: {},
};

export const detailRoomReducer = (state = initValue, action) => {
  switch (action.type) {
    case TYPES.DETAIL_ROOM_REQUEST:
      return { ...state, detailRoom: {} };

    case TYPES.DETAIL_ROOM_SUCCESS:
      return { ...state, detailRoom: action.payload };

    case TYPES.DETAIL_ROOM_FAILED:
      return { ...state };

    default:
      return { ...state };
  }
};
