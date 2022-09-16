import { TYPES, updateStatus } from "store/constants";
import { actFetchData as getDetailTicket } from "store/actions/detailTicket";
import { bookingRentalRoom } from "apis";

export const actFetchData = (data) => {
  return async (dispatch) => {
    try {
      dispatch(updateStatus(TYPES.BOOKING_ROOM_REQUEST));
      const res = await bookingRentalRoom(data);
      const idTicket =
        res.userDetail.tickets[res.userDetail.tickets.length - 1];
      dispatch(updateStatus(TYPES.BOOKING_ROOM_SUCCESS, res));
      dispatch(getDetailTicket(idTicket));
    } catch (err) {
      dispatch(updateStatus(TYPES.BOOKING_ROOM_FAILED, err));
    }
  };
};
