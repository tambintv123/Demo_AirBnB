import { TYPES, updateStatus } from "store/constants";

import { getListReviews } from "apis";

export const actFetchData = (data) => {
  return async (dispatch) => {
    try {
      dispatch(updateStatus(TYPES.LIST_REVIEWS_REQUEST));

      const res = await getListReviews(data);
      dispatch(updateStatus(TYPES.LIST_REVIEWS_SUCCESS, res));
    } catch (err) {
      dispatch(updateStatus(TYPES.LIST_REVIEWS_FAILED, err));
    }
  };
};
