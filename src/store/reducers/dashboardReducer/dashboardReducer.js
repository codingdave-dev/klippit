import { createReducer } from "../../../common/util/reducerUtil";
import { FETCH_USER_COUNT } from "../../constants/dashboardConstants/dashboardConstants";

const initialState = {
  users: 0,
};

const fetchUserCount = (state, payload) => {
  return {
    ...state,
    users: payload.users,
  };
};

export default createReducer(initialState, {
  [FETCH_USER_COUNT]: fetchUserCount,
});
