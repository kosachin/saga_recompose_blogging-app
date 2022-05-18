import {
  call,
  put,
  takeLatest,
  select,
  takeEvery,
  delay,
} from "redux-saga/effects";
import {
  addOnePostFail,
  addOnePostSuc,
  deleteOnePostFail,
  deleteOnePostSuc,
  fetchOnePostSuc,
  fetchPostsFail,
  fetchPostsSuc,
} from "../redux/actions";
import {
  ADD_ONE_POST,
  DELETE_ONE_POST,
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

const deleteOnePost = (id, posts) => {
  // return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
  //   method: "DELETE",
  // }).then((res) => {
  return posts.filter((post) => post.id != id);
  // });
};

const fetchOnePost = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) =>
    res.json()
  );
};

const addOnePost = (post) => {
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(post),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((response) => response.json());
};

function* asyncFetchAllPostsSuc() {
  const posts = yield call(fetchPosts);
  yield put(fetchPostsSuc(posts));
}

function* asyncFetchOnePostSuc({ payload }) {
  try {
    const post = yield call(fetchOnePost, +payload);
    yield put(fetchOnePostSuc(post));
  } catch (err) {
    yield put(fetchPostsFail(err));
  }
}
function* asyncDeleteOnePostSuc({ payload }) {
  try {
    const posts = yield select((store) => store.posts);
    const updatedPosts = yield call(deleteOnePost, payload, posts);
    yield delay(1000);
    yield put(deleteOnePostSuc(updatedPosts));
  } catch (err) {
    yield put(deleteOnePostFail(err));
  }
}

function* asyncAddOnePostSuc({ payload }) {
  try {
    const post = yield call(addOnePost, payload);
    yield put(addOnePostSuc(post));
  } catch (err) {
    yield put(addOnePostFail(err));
  }
}

function* rootSaga() {
  yield takeEvery(FETCH_POSTS, asyncFetchAllPostsSuc);
  yield takeLatest(FETCH_ONE_POST, asyncFetchOnePostSuc);
  yield takeLatest(DELETE_ONE_POST, asyncDeleteOnePostSuc);
  yield takeLatest(ADD_ONE_POST, asyncAddOnePostSuc);
}
export default rootSaga;
