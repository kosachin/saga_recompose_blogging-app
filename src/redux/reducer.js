import {
  ADD_ONE_POST,
  ADD_ONE_POST_FAIL,
  ADD_ONE_POST_REQ,
  ADD_ONE_POST_SUC,
  DELETE_ONE_POST_FAIL,
  DELETE_ONE_POST_REQ,
  DELETE_ONE_POST_SUC,
  FETCH_ONE_POST_FAIL,
  FETCH_ONE_POST_REQ,
  FETCH_ONE_POST_SUC,
  FETCH_POSTS_FAIL,
  FETCH_POSTS_REQ,
  FETCH_POSTS_SUC,
  REMOVE_ONE_POST_SUC,
} from "./constants";

const init = {
  posts: [],
  loading: false,
  error: null,
  currPost: null,
  meta: { total: 0, limit: 10, offset: 0 },
};

export const postsReducer = (store = init, { type, payload }) => {
  switch (type) {
    case FETCH_POSTS_REQ:
      return { ...store, loading: true };
    case FETCH_POSTS_SUC:
      return {
        ...store,
        loading: false,
        posts: payload,
        meta: {
          total: payload.length,
        },
      };
    case FETCH_POSTS_FAIL:
      return { ...store, loading: false, error: payload.message };
    case FETCH_ONE_POST_REQ:
      return { ...store, loading: true };
    case FETCH_ONE_POST_SUC:
      return { ...store, loading: false, currPost: payload };
    case FETCH_ONE_POST_FAIL:
      return { ...store, loading: false, error: payload.message };
    case DELETE_ONE_POST_REQ:
      return { ...store, loading: true };
    case DELETE_ONE_POST_SUC:
      return {
        ...store,
        loading: false,
        posts: payload,
        meta: {
          total: payload.length,
        },
      };
    case DELETE_ONE_POST_FAIL:
      return { ...store, loading: false, error: payload.message };

    case ADD_ONE_POST_REQ:
      return { ...store, loading: true };
    case ADD_ONE_POST_SUC:
      return { ...store, loading: false, posts: [...store.posts, payload] };
    case ADD_ONE_POST_FAIL:
      return { ...store, loading: false, error: payload.message };
    default:
      return store;
  }
};
