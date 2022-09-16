import { TYPES } from "store/constants";

const initValue = {
  listReviews: [],
};

export const listReviewsReducer = (state = initValue, action) => {
  switch (action.type) {
    case TYPES.LIST_REVIEWS_REQUEST:
      return { ...state, listReviews: [] };

    case TYPES.LIST_REVIEWS_SUCCESS:
      return { ...state, listReviews: action.payload };

    case TYPES.LIST_REVIEWS_FAILED:
      return { ...state };

    default:
      return { ...state };
  }
};
