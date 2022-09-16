import { combineReducers } from "redux";
import { detailRoomReducer } from "./detailRoom";
import { listReviewsReducer } from "./listReviews";
import { listRoomsReducer } from "./listRooms";
import { bookingRoomReducer } from "./bookingRoom";
import { detailTicketReducer } from "./detailTicket";
import { detailUserReducer } from "./detailUser";
import { getAuthReducer } from "./getAuth";
import { updateAvatarReducer } from "./updateAvatar";

const rootReducer = combineReducers({
  detailRoomReducer,
  listReviewsReducer,
  listRoomsReducer,
  bookingRoomReducer,
  detailTicketReducer,
  detailUserReducer,
  getAuthReducer,
  updateAvatarReducer,
});
export default rootReducer;
