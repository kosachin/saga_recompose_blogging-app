import {
  FETCH_POSTS,
  FETCH_POSTS_FAIL,
  FETCH_POSTS_REQ,
  FETCH_POSTS_SUC,
  FIND_ONE_POST_REQ,
  FIND_ONE_POST_SUC,
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

export const findOnePostReq = () => ({
  type: FIND_ONE_POST_REQ,
});

export const findOnePostSuc = (payload) => ({
  type: FIND_ONE_POST_SUC,
  payload,
});
