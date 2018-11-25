import {
  FETCH_LOCATIONS,
  NEW_LOCATION,
  DELETE_LOCATION,
  EDIT_LOCATION
} from "../actions/types";

const initialState = {
  locations: [
    {
      Address: "Hagas 5",
      Category: "Home",
      Coordinates: "31.743540, 34.978831",
      name: "Home"
    },
    {
      Address: "Ben Gurion 1, Beer Sheva",
      Category: "University",
      Coordinates: "31.262823, 34.800680",
      name: "University"
    }
  ],
  location: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_LOCATIONS:
      return {
        ...state
      };
    case NEW_LOCATION:
      state.locations.unshift(action.payload);
      return {
        ...state,
        location: action.payload
      };
    case DELETE_LOCATION:
      let newlocations = state.locations.filter((name, index) => {
        return action.payload != index;
      });
      return {
        ...state,
        locations: newlocations,
        location: {}
      };
    case EDIT_LOCATION:
      let editlocation = state.locations.filter((name, index) => {
        return action.payload[0] != index;
      });
      editlocation.unshift(action.payload[1]);
      return {
        ...state,
        locations: editlocation,
        location: {}
      };
    default:
      return state;
  }
}
