import {
  FETCH_ALERT_START,
  FETCH_ALERT_SUCCESS,
  FETCH_ALERT_ERROR
} from "../actions";

const initialState = {
  alerts: [],
  fetching: false,
  errors: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALERT_START:
      return {
        ...state,
        fetching: true,
        errors: null
      };
    case FETCH_ALERT_SUCCESS:
      console.log("FETCH_ALERT_SUCCESS action.payload", action.payload);
      return {
        ...state,
        fetching: false,
        errors: null,
        alerts: action.payload
      };
    case FETCH_ALERT_ERROR:
      return {
        ...state,
        fetching: false,
        errors: action.payload
      };
    default:
      return state;
  }
};
