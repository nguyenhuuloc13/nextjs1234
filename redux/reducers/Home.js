import { actionType } from "../contants/Home";

const initalState = {
  isLoading: false,
  courses: null,
  error: null,
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case actionType.GET_COURSES: {
      return { ...state, isLoading: true };
    }
    case actionType.GET_COURSES_SUCCESS: {
      return { ...state, isLoading: false, courses: action.data };
    }
    case actionType.GET_COURSES_FAIL: {
      return { ...state, error: action.error, isLoading: false };
    }
    default: return state;
  }
};

export default reducer;
