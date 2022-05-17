import { call, put, takeLatest, select, takeEvery } from "redux-saga/effects";
import {
  deleteOnePostSuc,
  fetchOnePostSuc,
  fetchPostsFail,
  fetchPostsSuc,
} from "../redux/actions";
import {
  DELETE_ONE_POST_REQ,
  FETCH_ONE_POST,
  FETCH_POSTS,
} from "../redux/constants";
const fetchPosts = () => {
  console.log("API hit");
  return fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
    res.json()
  );
};

function* asyncFetchAllPostsSuc() {
  const posts = yield call(fetchPosts);
  yield put(fetchPostsSuc(posts));
}

function* asyncDeleteOnePostSuc(id) {}

const fetchOnePost = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) =>
    res.json()
  );
};

function* asyncFetchOnePostSuc({ payload }) {
  try {
    const post = yield call(fetchOnePost, +payload);
    yield put(fetchOnePostSuc(post));
  } catch (err) {
    yield put(fetchPostsFail(err));
  }
}

function* rootSaga() {
  yield takeEvery(FETCH_POSTS, asyncFetchAllPostsSuc);
  yield takeLatest(DELETE_ONE_POST_REQ, asyncDeleteOnePostSuc);
  yield takeLatest(FETCH_ONE_POST, asyncFetchOnePostSuc);
}
export default rootSaga;
