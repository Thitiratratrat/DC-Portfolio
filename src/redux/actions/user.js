import {SET_USER_INFO} from '../actionTypes/user';

const setUserInfo = info => ({
  type: SET_USER_INFO,
  payload: info,
});

export default {setUserInfo};
