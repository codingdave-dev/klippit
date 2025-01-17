import {ASYNC_ACTION_ERROR, ASYNC_ACTION_FINISH, ASYNC_ACTION_START} from "../../constants/asyncConstants/asyncConstants";
import {createReducer} from "../../../common/util/reducerUtil";

const initialState = {
    loading: false,
    elementName: null
};

const asyncActionStarted = (state, payload) => {
    return {
        ...state,
        loading: true,
        elementName: payload
    };
};

const asyncActionFinished = (state) => {
    return {
        ...state,
        loading: false,
        elementName: null
    };
};

const asyncActionError = state => {
    return {
        ...state,
        loading: false,
        elementName: null
    };
};

export default createReducer(initialState, {
    [ASYNC_ACTION_START]: asyncActionStarted,
    [ASYNC_ACTION_FINISH]: asyncActionFinished,
    [ASYNC_ACTION_ERROR]: asyncActionError
})