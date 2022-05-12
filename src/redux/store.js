import { applyMiddleware, createStore } from "redux";
import { postsReducer } from "./reducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../saga/sagas";
const sagaMiddleware = createSagaMiddleware();
export const store = createStore(postsReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

