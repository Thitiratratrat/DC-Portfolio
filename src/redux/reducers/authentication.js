import {
  START_REGISTERING,
  FINISH_REGISTERING,
  LOGIN,
  LOGOUT,
} from '../actionTypes/authentication';

const initialState = {
  registerInProcess: false,
  isAuthenticated: false,
  mode: 'student',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case START_REGISTERING: {
      return {
        ...state,
        registerInProcess: true,
      };
    }

    case FINISH_REGISTERING: {
      return {
        ...state,
        registerInProcess: false,
      };
    }

    case LOGIN: {
      return {
        ...state,
        isAuthenticated: true,
      };
    }

    case LOGOUT: {
      return {
        ...state,
        isAuthenticated: false,
      };
    }

    default:
      return state;
  }
}
