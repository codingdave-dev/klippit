import { createReducer } from "../../../common/util/reducerUtil";
import {
  ADD_CAMPAIGN,
  FETCH_USER_CAMPAIGNS,
} from "../../constants/campaignConstants/campaignConstants";

const initialState = {
  campaigns: [],
  addCampaign: [],
};

const fetchUserCampaigns = (state, payload) => {
  return {
    ...state,
    campaigns: payload.campaigns,
  };
};

const addCampaign = (state, payload) => {
  return {
    ...state,
    addCampaign: payload.campaign,
  };
};

export default createReducer(initialState, {
  [FETCH_USER_CAMPAIGNS]: fetchUserCampaigns,
  [ADD_CAMPAIGN]: addCampaign,
});
