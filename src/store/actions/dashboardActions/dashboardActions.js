import axios from "axios";
import {
  asyncActionError,
  asyncActionFinish,
  asyncActionStart,
} from "../asyncActions/asyncActions";
import { FETCH_USER_COUNT } from "../../constants/dashboardConstants/dashboardConstants";

export const fetchUserCount = () => {
  return async (dispatch, getState, { getFirestore }) => {
    try {
      dispatch(asyncActionStart());
      axios
        .get(
          "https://us-central1-klippit-a2e0d.cloudfunctions.net/getUserCount"
        )
        .then((res) => {
          const users = res.data.value;
          dispatch({ type: FETCH_USER_COUNT, payload: { users } });
          dispatch(asyncActionFinish());
        })
        .catch((err) => dispatch(asyncActionError()));
    } catch (error) {
      dispatch(asyncActionError());
      console.log(error);
    }
  };
};
