import {
  START_REGISTERING,
  FINISH_REGISTERING,
  LOGOUT,
  LOGIN,
} from '../actionTypes/authentication';

const finishedRegistering = () => ({
  type: FINISH_REGISTERING,
});

const startRegistering = () => ({
  type: START_REGISTERING,
});

const logout = () => ({type: LOGOUT});

const login = () => ({type: LOGIN});

export default {
  finishedRegistering,
  startRegistering,
  logout,
  login,
};
