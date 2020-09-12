import {createReducer} from "../../../common/util/reducerUtil";
import {FETCH_USER_CAMPAIGNS} from "../../constants/campaignConstants/campaignConstants";




const initialState = {
    campaigns: [],

}

const fetchUserCampaigns = (state, payload) => {
    return {
        ...state,
        campaigns: payload.campaigns,
    }
}


export default createReducer(initialState, {
    [FETCH_USER_CAMPAIGNS]: fetchUserCampaigns,

})