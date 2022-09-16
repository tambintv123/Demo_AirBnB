import { TYPES } from "store/constants";

const initValue = {
  detailTicket: {},
};

export const detailTicketReducer = (state = initValue, action) => {
  switch (action.type) {
    case TYPES.DETAIL_TICKET_REQUEST:
      return { ...state, detailTicket: {} };

    case TYPES.DETAIL_TICKET_SUCCESS:
      return { ...state, detailTicket: action.payload };

    case TYPES.DETAIL_TICKET_FAILED:
      return { ...state };

    default:
      return { ...state };
  }
};
