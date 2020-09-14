import {
  asyncActionError,
  asyncActionFinish,
  asyncActionStart,
} from "../asyncActions/asyncActions";
import { FETCH_USER_COUNT } from "../../constants/dashboardConstants/dashboardConstants";

export const fetchUserCount = () => {
  return async (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore()

    const docId = 'bPlPHIxTiwRsmInlCfck'

    const query = firestore.collection('userCount')
    try {
      dispatch(asyncActionStart());
      let userCountQuery = await query.doc(`${docId}`).get();
      let users = userCountQuery.data().currentCount;

      dispatch({ type: FETCH_USER_COUNT, payload: { users } })

      dispatch(asyncActionFinish())
    } catch (error) {
      dispatch(asyncActionError());
      console.log(error);
    }
  };
};
