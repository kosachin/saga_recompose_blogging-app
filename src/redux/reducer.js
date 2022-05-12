import {
  FETCH_POSTS_FAIL,
  FETCH_POSTS_REQ,
  FETCH_POSTS_SUC,
  FIND_ONE_POST_SUC,
} from "./constants";

const init = {
  posts: [],
  loading: false,
  error: null,
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
    default:
      return store;
  }
};
