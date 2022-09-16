import { TYPES, updateStatus } from "store/constants";

import { getDetailTicket } from "apis";

export const actFetchData = (id) => {
  return async (dispatch) => {
    try {
      dispatch(updateStatus(TYPES.DETAIL_TICKET_REQUEST));

      const res = await getDetailTicket(id);
      dispatch(updateStatus(TYPES.DETAIL_TICKET_SUCCESS, res));
    } catch (err) {
      dispatch(updateStatus(TYPES.DETAIL_TICKET_FAILED, err));
    }
  };
};
