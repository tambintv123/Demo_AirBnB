import { TYPES, updateStatus } from "store/constants";

import { getLogin } from "apis";

export const actFetchData = (data, navigate) => {
  return async (dispatch) => {
    try {
      dispatch(updateStatus(TYPES.GET_AUTH_REQUEST));

      const res = await getLogin(data);
      dispatch(updateStatus(TYPES.GET_AUTH_SUCCESS, res));

      localStorage.setItem("UserCustomer", JSON.stringify(res));
      navigate(-1);
    } catch (err) {
      console.log(err);

      dispatch(updateStatus(TYPES.GET_AUTH_FAILED, err));
    }
  };
};
