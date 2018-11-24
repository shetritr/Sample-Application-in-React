import {
  FETCH_CATEGORIES,
  NEW_CATEGORY,
  DELETE_CATEGORY,
  EDIT_CATEGORY
} from "../actions/types";

const initialState = {
  categories: [
    { name: "University" },
    { name: "Work" },
    { name: "Home" },
    { name: "Vacation" },
    { name: "Game" }
  ],
  category: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return {
        ...state
      };
    case NEW_CATEGORY:
      state.categories.unshift(action.payload);
      return {
        ...state,
        category: action.payload
      };
    case DELETE_CATEGORY:
      let newcategories = state.categories.filter((name, index) => {
        return action.payload != index;
      });
      return {
        ...state,
        categories: newcategories,
        category: {}
      };
    case EDIT_CATEGORY:
      let editcategory = state.categories.filter((name, index) => {
        return action.payload[0] != index;
      });
      editcategory.unshift(action.payload[1]);
      return {
        ...state,
        categories: editcategory,
        category: {}
      };
    default:
      return state;
  }
}
