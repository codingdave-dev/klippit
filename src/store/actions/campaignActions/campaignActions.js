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
      return id;

      dispatch(asyncActionFinish());
    } catch (error) {
      dispatch(asyncActionError());
      console.log(error);
    }
  };
};

// DO NOT DELETE
// export const createCampaign = (uid, values, img1, img2, img3) => {
//   return async (dispatch, getState, { getFirebase, getFirestore }) => {
//     const firebase = getFirebase();
//     const firestore = getFirestore();
//
//     const userId = uid;
//
//     let documentRef = "";
//
//     const firebaseQuery = firebase.auth().currentUser;
//     const firestoreQuery = firestore.collection("users");
//
//     const campaignQuery = firestore.collection("campaigns");
//
//     try {
//       dispatch(asyncActionStart());
//
//       await campaignQuery
//         .add({
//           ...values,
//           addedBy: userId,
//           createdAt: firebase.firestore.FieldValue.serverTimestamp(),
//         })
//         .then((docRef) => {
//           documentRef = docRef.id;
//         });
//
//       if (img1) {
//         const imageName = cuid() + ".jpg";
//         const path = `${userId}/campaignPhotos`;
//         const options = {
//           name: imageName,
//         };
//
//         let uploadedFile = await firebase.uploadFile(
//           path,
//           img1[0],
//           null,
//           options
//         );
//
//         // get download URL
//         let downloadURL = await uploadedFile.uploadTaskSnapshot.ref.getDownloadURL();
//
//         // add image name and URL to firestore
//         await firestore
//           .collection("campaigns")
//           .doc(documentRef)
//           .collection("photos")
//           .add({
//             photoURL: downloadURL,
//             photoName: imageName,
//             createdAt: firebase.firestore.FieldValue.serverTimestamp(),
//           });
//       }
//
//       if (img2) {
//         const imageName = cuid() + ".jpg";
//         const path = `${userId}/campaignPhotos`;
//         const options = {
//           name: imageName,
//         };
//
//         let uploadedFile = await firebase.uploadFile(
//           path,
//           img2[0],
//           null,
//           options
//         );
//
//         // get download URL
//         let downloadURL = await uploadedFile.uploadTaskSnapshot.ref.getDownloadURL();
//
//         // add image name and URL to firestore
//         await firestore
//           .collection("campaigns")
//           .doc(documentRef)
//           .collection("photos")
//           .add({
//             photoURL: downloadURL,
//             photoName: imageName,
//             createdAt: firebase.firestore.FieldValue.serverTimestamp(),
//           });
//       }
//
//       if (img3) {
//         const imageName = cuid() + ".jpg";
//         const path = `${userId}/campaignPhotos`;
//         const options = {
//           name: imageName,
//         };
//
//         let uploadedFile = await firebase.uploadFile(
//           path,
//           img3[0],
//           null,
//           options
//         );
//
//         // get download URL
//         let downloadURL = await uploadedFile.uploadTaskSnapshot.ref.getDownloadURL();
//
//         // add image name and URL to firestore
//         await firestore
//           .collection("campaigns")
//           .doc(documentRef)
//           .collection("photos")
//           .add({
//             photoURL: downloadURL,
//             photoName: imageName,
//             createdAt: firebase.firestore.FieldValue.serverTimestamp(),
//           });
//       }
//
//       // NEW USER EMAIL
//
//       const userQuery = await firestoreQuery.doc(`${firebaseQuery.uid}`).get();
//       const currentUserEmail = userQuery.data().email;
//       const firstName = userQuery.data().firstName;
//       const lastName = userQuery.data().lastName;
//       await axios.get(
//         "https://us-central1-klippit-a2e0d.cloudfunctions.net/sendNewCampaignEmail",
//         {
//           params: {
//             email: currentUserEmail,
//             fullName: firstName + " " + lastName,
//             describeAService: values.describeAService,
//             discount: values.discount,
//           },
//         }
//       );
//
//       dispatch(asyncActionFinish());
//     } catch (error) {
//       dispatch(asyncActionError());
//       console.log(error);
//     }
//   };
// };
//
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

// // NOT USED
// export const toggleCampaign = (uid, id, value) => {
//   return async (dispatch, getState, { getFirebase, getFirestore }) => {
//     const firebase = getFirebase();
//     const firestore = getFirestore();
//
//     const query = firestore.collection("campaigns").doc(`${id}`);
//
//     try {
//       dispatch(asyncActionStart());
//
//       await query.update({
//         active: value,
//       });
//
//       dispatch(fetchUserCampaigns(uid));
//       dispatch(asyncActionFinish());
//     } catch (error) {
//       dispatch(asyncActionError());
//       console.log(error);
//     }
//   };
// };
