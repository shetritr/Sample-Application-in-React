import { FETCH_POSTS, NEW_POST } from "./types";
import axios from "axios";
var customData = [{}];

export const fatchPosts = () => dispatch => {
  dispatch({
    type: FETCH_POSTS,
    payload: customData
  });
};
export const createPosts = postData => dispatch => {
  dispatch({
    type: NEW_POST,
    payload: postData
  });
};
