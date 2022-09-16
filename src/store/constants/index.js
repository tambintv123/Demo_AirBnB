import _ from "lodash";
import { GET_AUTH } from "./auth";
import { BOOKING_ROOM } from "./bookingRoom";
import { DETAIL_ROOM } from "./detailRoom";
import { DETAIL_TICKET } from "./detailTicket";
import { DETAIL_USER } from "./detailUser";
import { LIST_REVIEWS } from "./listReviews";
import { LIST_ROOMS } from "./listRooms";
import { UPDATE_AVATAR } from "./updateAvatar";
const types = [
  ...Object.values(DETAIL_ROOM),
  ...Object.values(LIST_REVIEWS),
  ...Object.values(LIST_ROOMS),
  ...Object.values(BOOKING_ROOM),
  ...Object.values(DETAIL_TICKET),
  ...Object.values(DETAIL_USER),
  ...Object.values(GET_AUTH),
  ...Object.values(UPDATE_AVATAR),
];

const updateStatus = (status, statusInfo) => ({
  type: status,
  payload: statusInfo,
});
const TYPES = _.reduce(
  types,
  (result, value) => {
    result[value] = value;
    result[`${value}_REQUEST`] = `${value}_REQUEST`;
    result[`${value}_SUCCESS`] = `${value}_SUCCESS`;
    result[`${value}_FAILED`] = `${value}_FAILED`;
    return result;
  },
  {}
);
export { TYPES, updateStatus };
