import cuid from "cuid";
import {
  asyncActionError,
  asyncActionFinish,
  asyncActionStart,
} from "../asyncActions/asyncActions";
import {
  ADD_CAMPAIGN,
  FETCH_USER_CAMPAIGNS,
} from "../../constants/campaignConstants/campaignConstants";

export const fetchCampaign = (id) => {
  return async (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();

    const campaignQuery = firestore.collection("campaigns").doc(`${id}`);
    const photosQuery = firestore
      .collection("campaigns")
      .doc(`${id}`)
      .collection("photos");

    try {
      let query = await campaignQuery.get();
      let photoQuery = await photosQuery.get();

      let campaign = [];
      let photos = [];

      // PHOTOS
      if (!photoQuery.empty) {
        for (let i = 0; i < photoQuery.docs.length; i++) {
          let photo = {
            id: photoQuery.docs[i].id,
            ...photoQuery.docs[i].data(),
          };
          photos.push(photo);
        }
      }

      if (query.exists) {
        let list = {
          id: query.id,
          ...query.data(),
          photos: photos,
        };
        campaign.push(list);
      }

      if (!query.exists) {
        return;
      }

      dispatch({ type: ADD_CAMPAIGN, payload: { campaign } });
      dispatch(asyncActionFinish());
    } catch (error) {
      dispatch(asyncActionError());
      console.log(error);
    }
  };
};

export const createCampaignStep1 = (values) => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    let documentRef = "";

    const firebaseQuery = firebase.auth().currentUser;
    const campaignQuery = firestore.collection("campaigns");

    try {
      dispatch(asyncActionStart());

      await campaignQuery
        .add({
          ...values,
          addedBy: firebaseQuery.uid,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .then((docRef) => {
          documentRef = docRef.id;
        });

      dispatch(fetchCampaign(documentRef));
      return documentRef;

      dispatch(asyncActionFinish());
    } catch (error) {
      dispatch(asyncActionError());
      console.log(error);
    }
  };
};

export const createCampaignStep2 = (id, img1, img2, img3) => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    const firebaseQuery = firebase.auth().currentUser;

    try {
      dispatch(asyncActionStart());
      const userId = firebaseQuery.uid;

      if (img1) {
        const imageName = cuid() + ".jpg";
        const path = `${userId}/campaignPhotos`;
        const options = {
          name: imageName,
        };

        let uploadedFile = await firebase.uploadFile(
          path,
          img1[0],
          null,
          options
        );

        // get download URL
        let downloadURL = await uploadedFile.uploadTaskSnapshot.ref.getDownloadURL();

        // add image name and URL to firestore
        await firestore
          .collection("campaigns")
          .doc(id)
          .collection("photos")
          .add({
            photoURL: downloadURL,
            photoName: imageName,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          });
      }

      if (img2) {
        const imageName = cuid() + ".jpg";
        const path = `${userId}/campaignPhotos`;
        const options = {
          name: imageName,
        };

        let uploadedFile = await firebase.uploadFile(
          path,
          img2[0],
          null,
          options
        );

        // get download URL
        let downloadURL = await uploadedFile.uploadTaskSnapshot.ref.getDownloadURL();

        // add image name and URL to firestore
        await firestore
          .collection("campaigns")
          .doc(id)
          .collection("photos")
          .add({
            photoURL: downloadURL,
            photoName: imageName,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          });
      }

      if (img3) {
        const imageName = cuid() + ".jpg";
        const path = `${userId}/campaignPhotos`;
        const options = {
          name: imageName,
        };

        let uploadedFile = await firebase.uploadFile(
          path,
          img3[0],
          null,
          options
        );

        // get download URL
        let downloadURL = await uploadedFile.uploadTaskSnapshot.ref.getDownloadURL();

        // add image name and URL to firestore
        await firestore
          .collection("campaigns")
          .doc(id)
          .collection("photos")
          .add({
            photoURL: downloadURL,
            photoName: imageName,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          });
      }

      dispatch(fetchCampaign(id));
      return id;

      dispatch(asyncActionFinish());
    } catch (error) {
      dispatch(asyncActionError());
      console.log(error);
    }
  };
};

export const createCampaignStep3 = (id, values) => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    const campaignQuery = firestore.collection("campaigns").doc(`${id}`);

    try {
      dispatch(asyncActionStart());

      await campaignQuery.update({ ...values });

      dispatch(fetchCampaign(id));
      return id;

      dispatch(asyncActionFinish());
    } catch (error) {
      dispatch(asyncActionError());
      console.log(error);
    }
  };
};

export const createCampaignStep4 = (id, values) => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    const campaignQuery = firestore.collection("campaigns").doc(`${id}`);

    try {
      dispatch(asyncActionStart());

      await campaignQuery.update({ ...values });

      dispatch(fetchCampaign(id));
      return id;

      dispatch(asyncActionFinish());
    } catch (error) {
      dispatch(asyncActionError());
      console.log(error);
    }
  };
};

export const createCampaignStep5 = (id, values) => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    const campaignQuery = firestore.collection("campaigns").doc(`${id}`);

    try {
      dispatch(asyncActionStart());

      await campaignQuery.update({ ...values });

      dispatch(fetchCampaign(id));

      dispatch(asyncActionFinish());
    } catch (error) {
      dispatch(asyncActionError());
      console.log(error);
    }
  };
};

// EDIT
export const editCampaignStep1 = (id, values) => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    const firebaseQuery = firestore.collection("campaigns").doc(`${id}`);

    try {
      dispatch(asyncActionStart());

      await firebaseQuery.update({ ...values });

      dispatch(fetchCampaign(id));
      return id;
      dispatch(asyncActionFinish());
    } catch (error) {
      dispatch(asyncActionError());
      console.log(error);
    }
  };
};

export const editCampaignStep2 = (id, img) => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    const firebaseQuery = firebase.auth().currentUser;

    try {
      dispatch(asyncActionStart());
      const userId = firebaseQuery.uid;

      if (img) {
        const imageName = cuid() + ".jpg";
        const path = `${userId}/campaignPhotos`;
        const options = {
          name: imageName,
        };

        let uploadedFile = await firebase.uploadFile(
          path,
          img[0],
          null,
          options
        );

        // get download URL
        let downloadURL = await uploadedFile.uploadTaskSnapshot.ref.getDownloadURL();

        // add image name and URL to firestore
        await firestore
          .collection("campaigns")
          .doc(id)
          .collection("photos")
          .add({
            photoURL: downloadURL,
            photoName: imageName,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          });
      }

      dispatch(fetchCampaign(id));
      return id;

      dispatch(asyncActionFinish());
    } catch (error) {
      dispatch(asyncActionError());
      console.log(error);
    }
  };
};

export const editCampaignStep3 = (id, values) => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    const campaignQuery = firestore.collection("campaigns").doc(`${id}`);

    try {
      dispatch(asyncActionStart());

      await campaignQuery.update({ ...values });

      dispatch(fetchCampaign(id));
      return id;

      dispatch(asyncActionFinish());
    } catch (error) {
      dispatch(asyncActionError());
      console.log(error);
    }
  };
};
export const editCampaignStep4 = (id, values) => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    const campaignQuery = firestore.collection("campaigns").doc(`${id}`);

    try {
      dispatch(asyncActionStart());

      await campaignQuery.update({ ...values });

      dispatch(fetchCampaign(id));
      return id;

      dispatch(asyncActionFinish());
    } catch (error) {
      dispatch(asyncActionError());
      console.log(error);
    }
  };
};
export const editCampaignStep5 = (id, values) => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    const campaignQuery = firestore.collection("campaigns").doc(`${id}`);

    try {
      dispatch(asyncActionStart());

      await campaignQuery.update({ ...values });

      dispatch(fetchCampaign(id));
      return id;

      dispatch(asyncActionFinish());
    } catch (error) {
      dispatch(asyncActionError());
      console.log(error);
    }
  };
};

export const deleteCampaign = (campaignId) => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    let firebaseQuery = firebase.auth().currentUser;

    const campaignQuery = firestore
      .collection("campaigns")
      .doc(`${campaignId}`);
    const photosQuery = firestore
      .collection("campaigns")
      .doc(`${campaignId}`)
      .collection("photos");

    try {
      dispatch(asyncActionStart());

      // DELETE PHOTOS
      let query = await photosQuery.get();
      let allPhotos = [];
      for (let i = 0; i < query.docs.length; i++) {
        let photo = {
          ...query.docs[i].data(),
          id: query.docs[i].id,
        };
        allPhotos.push(photo);
      }
      if (allPhotos.length > 0) {
        allPhotos.map((photo) => {
          dispatch(deleteCampaignImage(campaignId, photo.id, photo.photoName));
        });
      }

      await campaignQuery.delete();

      dispatch(fetchUserCampaigns(firebaseQuery.uid));
      dispatch(asyncActionFinish());
    } catch (error) {
      dispatch(asyncActionError());
      console.log(error);
    }
  };
};

export const deleteCampaignImage = (campaignId, id, imgName) => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    let firebaseQuery = firebase.auth().currentUser;
    let firestoreQuery = firestore
      .collection("campaigns")
      .doc(`${campaignId}`)
      .collection("photos");

    try {
      dispatch(asyncActionStart());

      // DETAIL UPDATE
      let user = firestoreQuery.doc(`${firebaseQuery.uid}`);

      // DELETE PHOTO FROM STORAGE
      await firebase.deleteFile(
        `${firebaseQuery.uid}/campaignPhotos/${imgName}`
      );

      await firestoreQuery.doc(`${id}`).delete();

      dispatch(fetchCampaign(campaignId));
      dispatch(asyncActionFinish());
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchUserCampaigns = (uid) => {
  return async (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();

    const campaignQuery = firestore
      .collection("campaigns")
      .where("addedBy", "==", `${uid}`);

    try {
      dispatch(asyncActionStart());

      let query = await campaignQuery.get();

      let campaigns = [];

      for (let i = 0; i < query.docs.length; i++) {
        let campaign = {
          ...query.docs[i].data(),
          id: query.docs[i].id,
        };
        campaigns.push(campaign);
      }

      dispatch({ type: FETCH_USER_CAMPAIGNS, payload: { campaigns } });
      dispatch(asyncActionFinish());
    } catch (error) {
      dispatch(asyncActionError());
      console.log(error);
    }
  };
};
