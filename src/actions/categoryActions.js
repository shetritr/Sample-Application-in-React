import {
  FETCH_CATEGORIES,
  NEW_CATEGORY,
  DELETE_CATEGORY,
  EDIT_CATEGORY
} from "./types";

export const fetchcategories = () => dispatch => {
  dispatch({
    type: FETCH_CATEGORIES
  });
};
export const createCategory = categoryData => dispatch => {
  dispatch({
    type: NEW_CATEGORY,
    payload: categoryData
  });
};
export const deleteCategory = index => dispatch => {
  dispatch({
    type: DELETE_CATEGORY,
    payload: index
  });
};
export const editCategory = (index, editcategory) => dispatch => {
  dispatch({
    type: EDIT_CATEGORY,
    payload: [index, editcategory]
  });
};
