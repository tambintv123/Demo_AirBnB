import { TYPES, updateStatus } from "store/constants";

import { getDetailRentalRoom } from "apis";

export const actFetchData = (id) => {
  return async (dispatch) => {
    try {
      dispatch(updateStatus(TYPES.DETAIL_ROOM_REQUEST));

      const res = await getDetailRentalRoom(id);
      dispatch(updateStatus(TYPES.DETAIL_ROOM_SUCCESS, res));
    } catch (error) {
      dispatch(updateStatus(TYPES.DETAIL_ROOM_FAILED, error));
    }
  };
};
