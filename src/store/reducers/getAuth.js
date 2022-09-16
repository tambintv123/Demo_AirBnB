import { TYPES } from "store/constants";

const initValue = {
  getAuth: null,
  error: null,
};

export const getAuthReducer = (state = initValue, action) => {
  switch (action.type) {
    case TYPES.GET_AUTH_REQUEST:
      state.error = null;
      state.getAuth = null;
      return { ...state };

    case TYPES.GET_AUTH_SUCCESS:
      state.error = null;
      state.getAuth = action.payload;
      return { ...state };

    case TYPES.GET_AUTH_FAILED:
      state.error = action.payload;
      state.getAuth = null;
      return { ...state };

    default:
      return { ...state };
  }
};
