import { FETCH_POSTS, NEW_POST, DELETE_CATEGORY, EDIT_CATEGORY } from "./types";
var customData = [];

export const fetchPosts = () => dispatch => {
  dispatch({
    type: FETCH_POSTS
  });
};
export const createCategory = postData => dispatch => {
  dispatch({
    type: NEW_POST,
    payload: postData
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
