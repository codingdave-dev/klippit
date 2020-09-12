import { combineReducers } from "redux";
import {reducer as formReducer} from "redux-form";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

import asyncReducer from '../asyncReducers/asyncReducers'

import dialogReducer from '../dialogReducer/dialogReducer'
import campaignReducer from "../campaignReducer/campaignReducer";


const rootReducer = combineReducers({
    // ASYNC
    loading: asyncReducer,

    // FIREBASE/FIRESTORE
    firebase: firebaseReducer,
    firestore: firestoreReducer,

    // REDUX FORM REDUCER
    form: formReducer,

    // DIALOG REDUCER
    dialog: dialogReducer,

    // USER
    campaigns: campaignReducer


});

export default rootReducer;