import {
  START_REGISTERING,
  FINISH_REGISTERING,
  LOGIN,
  LOGOUT,
} from '../actionTypes/authentication';

const initialState = {
  registerInProcess: false,
  isAuthenticated: false,
  mode: 'employer',
  studentFirstname: '',
  instituteName: '',
  employerName: '',
  registerMode: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case START_REGISTERING: {
      return {
        ...state,
        registerInProcess: true,
        ...action.payload,
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
        mode: action.payload,
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
