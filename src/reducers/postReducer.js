import {
  FETCH_POSTS,
  NEW_POST,
  DELETE_CATEGORY,
  EDIT_CATEGORY
} from "../actions/types";

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state
      };
    case NEW_POST:
      return {
        ...state,
        item: action.payload
      };
    case DELETE_CATEGORY:
      let newposts = state.items.filter((name, index) => {
        return action.payload != index;
      });
      return {
        ...state,
        items: newposts
      };
    case EDIT_CATEGORY:
      let editposts = state.items.filter((name, index) => {
        return action.payload[0] != index;
      });
      editposts.unshift(action.payload[1]);
      return {
        ...state,
        items: editposts
      };
    default:
      return state;
  }
}
