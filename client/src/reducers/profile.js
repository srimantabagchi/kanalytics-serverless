import {
  GET_PROFILE,
  PROFILE_ERROR,
  ADD_FILE,
  DELETE_FILE
} from "../actions/types";

const initialState = {
  profile: null,
  profiles: [],
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROFILE:
    case ADD_FILE:
    case DELETE_FILE:
      return {
        ...state,
        profile: payload,
        loading: false
      };
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}
