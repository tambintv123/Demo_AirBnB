import { TYPES, updateStatus } from "store/constants";

import { updateAvatarUser } from "apis";

export const actFetchData = (data) => {
  return async (dispatch) => {
    try {
      dispatch(updateStatus(TYPES.UPDATE_AVATAR_REQUEST));
      let formData = new FormData();

      formData.append("avatar", data);

      const res = await updateAvatarUser(formData);

      dispatch(updateStatus(TYPES.UPDATE_AVATAR_SUCCESS, res));
    } catch (err) {
      console.log(err);
      dispatch(updateStatus(TYPES.UPDATE_AVATAR_FAILED, err));
    }
  };
};
