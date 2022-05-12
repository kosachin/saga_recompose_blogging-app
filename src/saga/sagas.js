import { call, put, takeLatest } from "redux-saga/effects";
import { fetchPostsSuc } from "../redux/actions";
import { FETCH_POSTS } from "../redux/constants";
import { getPostsFromLocalStorage } from "../utils/getPostsFromLocalStorge";
import { isLocalStorageInit } from "../utils/isLocalStorageInit";
import { savePostsToLocalStorage } from "../utils/savePostsToLocalStorage";
const fetchPosts = () => {
  console.log("API hit");
  return fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
    res.json()
  );
};

function* asyncFetchAllPostsSuc() {
  let posts;
  if (!isLocalStorageInit()) {
    posts = yield call(fetchPosts);
    savePostsToLocalStorage(posts);
  } else {
    posts = getPostsFromLocalStorage();
  }
  yield put(fetchPostsSuc(posts));
}
function* rootSaga() {
  yield takeLatest(FETCH_POSTS, asyncFetchAllPostsSuc);
}
export default rootSaga;
