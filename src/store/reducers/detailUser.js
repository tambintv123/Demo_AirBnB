import { TYPES } from "store/constants";

const initValue = {
  detailUser: {},
};

export const detailUserReducer = (state = initValue, action) => {
  switch (action.type) {
    case TYPES.DETAIL_USER_REQUEST:
      return { ...state, detailUser: {} };

    case TYPES.DETAIL_USER_SUCCESS:
      return { ...state, detailUser: action.payload };

    case TYPES.DETAIL_USER_FAILED:
      return { ...state };

    default:
      return { ...state };
  }
};
