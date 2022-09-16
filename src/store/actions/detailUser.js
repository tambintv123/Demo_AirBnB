import { TYPES, updateStatus } from "store/constants";

import { getDetailUser } from "apis";

export const actFetchData = (id) => {
  return async (dispatch) => {
    try {
      dispatch(updateStatus(TYPES.DETAIL_USER_REQUEST));

      const res = await getDetailUser(id);
      dispatch(updateStatus(TYPES.DETAIL_USER_SUCCESS, res));
    } catch (err) {
      dispatch(updateStatus(TYPES.DETAIL_USER_FAILED, err));
    }
  };
};
