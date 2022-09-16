import { TYPES } from "store/constants";

const initValue = {
  updateAvatar: {},
};

export const updateAvatarReducer = (state = initValue, action) => {
  switch (action.type) {
    case TYPES.UPDATE_AVATAR_REQUEST:
      return { ...state, updateAvatar: {} };

    case TYPES.UPDATE_AVATAR_SUCCESS:
      return { ...state, updateAvatar: action.payload };

    case TYPES.UPDATE_AVATAR_FAILED:
      return { ...state };

    default:
      return { ...state };
  }
};
