import { actionType } from "../contants/Home";

export function getCourse(payload) {
  return {
    type: actionType.GET_COURSES,
    payload,
  };
}

export function getCoursesSucess(data) {
  return {
    type: actionType.GET_COURSES_SUCCESS,
    data,
  };
}

export function getCoursesFail(error) {
  return {
    type: actionType.GET_COURSES_FAIL,
    error,
  };
}
