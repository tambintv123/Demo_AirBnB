import { TYPES, updateStatus } from "store/constants";

import { getListRentalRoomByLocation } from "apis";

export const actFetchData = (data) => {
  return async (dispatch) => {
    try {
      dispatch(updateStatus(TYPES.LIST_ROOMS_REQUEST));

      const res = await getListRentalRoomByLocation(data);

      dispatch(updateStatus(TYPES.LIST_ROOMS_SUCCESS, res));
    } catch (err) {
      dispatch(updateStatus(TYPES.LIST_ROOMS_FAILED, err));
    }
  };
};
