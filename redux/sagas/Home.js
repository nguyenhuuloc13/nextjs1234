import { all, call, put, takeEvery } from "redux-saga/effects";
import api from "../../config/api";
import { getCoursesFail, getCoursesSucess, } from "../actions/Home";
import { actionType } from "../contants/Home";

function* getCourses(action) {
  try {
    const response = yield call(() => api.get("/courses"));
    yield put(getCoursesSucess(response?.data?.datas?.data));
  } catch (err) {
    yield put(getCoursesFail(err));
  }
}

function* HomeSaga() {
  yield all([takeEvery(actionType.GET_COURSES, getCourses)]);
}

export default HomeSaga;
