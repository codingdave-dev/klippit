import { SubmissionError } from "redux-form";
import { reset } from "redux-form";
import {
  asyncActionError,
  asyncActionFinish,
  asyncActionStart,
} from "../asyncActions/asyncActions";
import cuid from "cuid/index";
import axios from "axios";

export const updateUserProfile = (values, avatarImage) => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    const firstName = values.firstName;
    const lastName = values.lastName;
    const phoneNumber = values.phoneNumber;
    const graduationYear = values.graduationYear;
    const email = values.email;

    let imageURL = "/assets/avatar/avatar.png";
    let imageName = "";

    let firebaseQuery = firebase.auth().currentUser;
    let firestoreQuery = firestore.collection("users");

    try {
      dispatch(asyncActionStart());

      // DETAIL UPDATE
      let user = firestoreQuery.doc(`${firebaseQuery.uid}`);
      let currentEmail = await firestoreQuery.doc(`${firebaseQuery.uid}`).get();
      let currentUserEmail = currentEmail.data().email;

      let currentURL = await firestoreQuery.doc(`${firebaseQuery.uid}`).get();
      let currentImageURL = currentURL.data().imageURL;
      let currentImgName = await firestoreQuery
        .doc(`${firebaseQuery.uid}`)
        .get();
      let currentImageName = currentImgName.data().imageName;

      if (email !== currentUserEmail) {
        await firebaseQuery.updateEmail(`${email}`);
        await user.update({ email: `${email}` });
      }

      // AVATAR UPLOAD
      if (avatarImage) {
        if (currentImageURL !== "/assets/avatar/avatar.png") {
          // DELETE PHOTO FROM STORAGE
          await firebase.deleteFile(
            `${firebaseQuery.uid}/avatar/${currentImageName}`
          );
          imageURL = "/assets/avatar/avatar.png";
          imageName = "";

          // UPLOAD NEW PHOTO TO STORAGE
          imageName = cuid() + ".jpg";
          const path = `${firebaseQuery.uid}/avatar`;
          const options = {
            name: imageName,
          };

          let uploadedFile = await firebase.uploadFile(
            path,
            avatarImage[0],
            null,
            options
          );

          // get download URL
          imageURL = await uploadedFile.uploadTaskSnapshot.ref.getDownloadURL();
        }

        if (currentImageURL === "/assets/avatar/avatar.png") {
          imageName = cuid() + ".jpg";
          const path = `${firebaseQuery.uid}/avatar`;
          const options = {
            name: imageName,
          };

          let uploadedFile = await firebase.uploadFile(
            path,
            avatarImage[0],
            null,
            options
          );

          // get download URL
          imageURL = await uploadedFile.uploadTaskSnapshot.ref.getDownloadURL();
        }
      } else {
        imageURL = currentImageURL;
        imageName = currentImageName;
      }

      await user.update({
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        graduationYear: graduationYear,
        email: email,
        imageURL: imageURL,
        imageName: imageName,
      });

      dispatch(asyncActionFinish());
    } catch (error) {
      dispatch(asyncActionError());
      let errorMessage = "";

      if (
        error.message ===
        "This operation is sensitive and requires recent authentication. Log in again before retrying this request."
      ) {
        errorMessage =
          "You need to logout and log back in to update your password.";
        throw new SubmissionError({
          _error: errorMessage,
        });
      }

      if (error.message === "The email address is badly formatted.") {
        errorMessage = "Please enter a valid email address.";
        throw new SubmissionError({
          _error: errorMessage,
        });
      }

      console.log(error);
    }
  };
};

export const deleteAvatarPhoto = () => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    let imageURL = "/assets/avatar/avatar.png";
    let imageName = "";

    let firebaseQuery = firebase.auth().currentUser;
    let firestoreQuery = firestore.collection("users");

    try {
      dispatch(asyncActionStart());

      // DETAIL UPDATE
      let user = firestoreQuery.doc(`${firebaseQuery.uid}`);

      let currentImgName = await firestoreQuery
        .doc(`${firebaseQuery.uid}`)
        .get();
      let currentImageName = currentImgName.data().imageName;

      // DELETE PHOTO FROM STORAGE
      await firebase.deleteFile(
        `${firebaseQuery.uid}/avatar/${currentImageName}`
      );

      await user.update({
        imageURL: imageURL,
        imageName: imageName,
      });

      dispatch(asyncActionFinish());
    } catch (error) {
      dispatch(asyncActionError());

      console.log(error);
    }
  };
};

export const changeUserPassword = (values) => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    let firebaseQuery = firebase.auth().currentUser;
    const firestoreQuery = firestore.collection("users");

    const email = firebaseQuery.email;
    const currentPassword = values.currentPassword;
    const newPassword = values.newPassword;

    let credential = firebase.auth.EmailAuthProvider.credential(
      email,
      currentPassword
    );

    try {
      dispatch(asyncActionStart());
      await firebaseQuery.reauthenticateWithCredential(credential);

      await firebaseQuery.updatePassword(`${newPassword}`);

      const userQuery = await firestoreQuery.doc(`${firebaseQuery.uid}`).get();
      const firstName = userQuery.data().firstName;
      const lastName = userQuery.data().lastName;

      await axios.get(
        "https://us-central1-klippit-a2e0d.cloudfunctions.net/sendNewResetPasswordEmail",
        {
          params: {
            email: email,
            fullName: firstName + " " + lastName,
          },
        }
      );

      dispatch(reset("passwordForm"));
      dispatch(asyncActionFinish());
    } catch (error) {
      dispatch(asyncActionError());
      let errorMessage;
      if (
        error.message ===
        "The password is invalid or the user does not have a password."
      ) {
        errorMessage = "Current password is invalid";
        throw new SubmissionError({
          _error: errorMessage,
        });
      }

      console.log(error);
    }
  };
};
