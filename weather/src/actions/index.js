import axios from "axios";

// Declare action type
//Three phases of our finite state pattern: START, ERROR, ERROR

// Create action creator
//Fetch weather alerts from API

// dispatch an action object to the reducer

export const FETCH_ALERT_START = "FETCH_ALERT_START";
export const FETCH_ALERT_SUCCESS = "FETCH_ALERT_SUCCESS";
export const FETCH_ALERT_ERROR = "FETCH_ALERT_ERROR";

export const getAlerts = () => dispatch => {
  dispatch({ type: FETCH_ALERT_START });
  axios
    .get(`https://api.weather.gov/alerts`)
    .then(response => {
      console.log("getAlerts response.data", response.data);
      dispatch({ type: FETCH_ALERT_SUCCESS, payload: response.data.features });
    })
    .catch(error => {
      console.log("getAlerts error", error);
      dispatch({ type: FETCH_ALERT_ERROR });
    });
};
