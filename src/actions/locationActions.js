import {
  FETCH_LOCATIONS,
  NEW_LOCATION,
  DELETE_LOCATION,
  EDIT_LOCATION
} from "./types";
var customData = [];

export const fetchLocations = () => dispatch => {
  dispatch({
    type: FETCH_LOCATIONS
  });
};
export const createLocation = locationData => dispatch => {
  dispatch({
    type: NEW_LOCATION,
    payload: locationData
  });
};
export const deleteLocation = index => dispatch => {
  dispatch({
    type: DELETE_LOCATION,
    payload: index
  });
};
export const editLocation = (index, editlocation) => dispatch => {
  dispatch({
    type: EDIT_LOCATION,
    payload: [index, editlocation]
  });
};
