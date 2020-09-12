import {
  asyncActionError,
  asyncActionFinish,
  asyncActionStart,
} from "../asyncActions/asyncActions";

export const addBusinessInfo = (uid, values) => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    const userId = uid;

    const userQuery = firestore.collection("users").doc(`${userId}`);

    try {
      dispatch(asyncActionStart());
      await userQuery.update({
        additionalInfoSet: true,
        ...values
        // businessInfo: {
        //   ...values
        // },
      });

      dispatch(asyncActionFinish());
    } catch (error) {
      dispatch(asyncActionError());
      console.log(error);
    }
  };
};
