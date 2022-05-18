import {
  FETCH_POSTS,
  FETCH_POSTS_REQ,
  FETCH_POSTS_SUC,
  FETCH_POSTS_FAIL,
  FETCH_ONE_POST,
  FETCH_ONE_POST_REQ,
  FETCH_ONE_POST_SUC,
  FETCH_ONE_POST_FAIL,
  DELETE_ONE_POST,
  DELETE_ONE_POST_REQ,
  DELETE_ONE_POST_SUC,
  DELETE_ONE_POST_FAIL,
  ADD_ONE_POST,
  ADD_ONE_POST_SUC,
  ADD_ONE_POST_FAIL,
  ADD_ONE_POST_REQ,
} from "./constants";

export const fetchPosts = () => ({
  type: FETCH_POSTS,
});
export const fetchPostsReq = () => ({
  type: FETCH_POSTS_REQ,
});

export const fetchPostsSuc = (payload) => ({
  type: FETCH_POSTS_SUC,
  payload,
});

export const fetchPostsFail = (payload) => ({
  type: FETCH_POSTS_FAIL,
  payload,
});

export const fetchOnePost = (payload) => ({
  type: FETCH_ONE_POST,
  payload,
});

export const fetchOnePostReq = () => ({
  type: FETCH_ONE_POST_REQ,
});

export const fetchOnePostSuc = (payload) => ({
  type: FETCH_ONE_POST_SUC,
  payload,
});

export const fetchOnePostFail = (payload) => ({
  type: FETCH_ONE_POST_FAIL,
  payload,
});

export const deleteOnePost = (payload) => ({
  type: DELETE_ONE_POST,
  payload,
});

export const deleteOnePostReq = (payload) => ({
  type: DELETE_ONE_POST_REQ,
  payload,
});

export const deleteOnePostSuc = (payload) => ({
  type: DELETE_ONE_POST_SUC,
  payload,
});

export const deleteOnePostFail = (payload) => ({
  type: DELETE_ONE_POST_FAIL,
  payload,
});

export const addOnePost = (payload) => ({
  type: ADD_ONE_POST,
  payload,
});

export const addOnePostReq = (payload) => ({
  type: ADD_ONE_POST_REQ,
  payload,
});

export const addOnePostSuc = (payload) => ({
  type: ADD_ONE_POST_SUC,
  payload,
});

export const addOnePostFail = (payload) => ({
  type: ADD_ONE_POST_FAIL,
  payload,
});
