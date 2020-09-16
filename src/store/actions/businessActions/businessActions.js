import {
  asyncActionError,
  asyncActionFinish,
  asyncActionStart,
} from "../asyncActions/asyncActions";


export const addFirstLastName = (uid, values) => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    const userId = uid;

    const userQuery = firestore.collection("users").doc(`${userId}`);

    try {
      dispatch(asyncActionStart());
      await userQuery.update({
        firstLastNameSet: true,
        ...values
      });

      dispatch(asyncActionFinish());
    } catch (error) {
      dispatch(asyncActionError());
      console.log(error);
    }
  };
};

export const addBusinessType = (uid, values) => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    const userId = uid;

    const userQuery = firestore.collection("users").doc(`${userId}`);

    try {
      dispatch(asyncActionStart());
      await userQuery.update({
        businessTypeSet: true,
        ...values
      });

      dispatch(asyncActionFinish());
    } catch (error) {
      dispatch(asyncActionError());
      console.log(error);
    }
  };
};

export const addBusinessInfo = (uid, values) => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    const userId = uid;

    const userQuery = firestore.collection("users").doc(`${userId}`);

    try {
      dispatch(asyncActionStart());
      await userQuery.update({
        businessInfoSet: true,
        ...values
      });

      dispatch(asyncActionFinish());
    } catch (error) {
      dispatch(asyncActionError());
      console.log(error);
    }
  };
};

export const addManagementResponsibilities = (uid, values) => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    const userId = uid;

    const userQuery = firestore.collection("users").doc(`${userId}`);

    try {
      dispatch(asyncActionStart());
      await userQuery.update({
        managementResponsibilitiesSet: true,
        ...values
      });

      dispatch(asyncActionFinish());
    } catch (error) {
      dispatch(asyncActionError());
      console.log(error);
    }
  };
};

export const addNumberOfPeople = (uid, values) => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    const userId = uid;

    const userQuery = firestore.collection("users").doc(`${userId}`);

    try {
      dispatch(asyncActionStart());
      await userQuery.update({
        numberOfPeopleSet: true,
        additionalInfoSet: true,
        ...values
      });

      dispatch(asyncActionFinish());
    } catch (error) {
      dispatch(asyncActionError());
      console.log(error);
    }
  };
};