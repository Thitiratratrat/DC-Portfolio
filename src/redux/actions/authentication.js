import {
  START_REGISTERING,
  FINISH_REGISTERING,
  LOGOUT,
  LOGIN,
} from '../actionTypes/authentication';

const finishedRegistering = () => ({
  type: FINISH_REGISTERING,
});

const startRegistering = authentication => ({
  type: START_REGISTERING,
  payload: authentication,
});

const logout = () => ({type: LOGOUT});

const login = mode => ({type: LOGIN, payload: mode});

export default {
  finishedRegistering,
  startRegistering,
  logout,
  login,
};
