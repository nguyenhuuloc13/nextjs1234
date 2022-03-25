import { all } from "redux-saga/effects";
import createSagaMiddleware from "redux-saga";
import HomeSaga from './sagas/Home';
export const sagaMiddleware = createSagaMiddleware();
export default function* rootSaga() {
  yield all([HomeSaga()]);
}
