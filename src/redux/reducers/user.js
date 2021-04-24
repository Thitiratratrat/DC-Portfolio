import {SET_USER_INFO} from '../actionTypes/user';

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_USER_INFO: {
      return {
        ...action.payload,
      };
    }

    default:
      return state;
  }
}
