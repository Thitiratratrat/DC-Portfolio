import {SET_ACADEMIC_PORTFOLIO} from '../actionTypes/student';

const initialState = {
  purpose: '',
  activity: '',
  experience: '',
  education: '',
  skills: '',
  awards: '',
  projects: '',
  firstName: '',
  lastName: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_ACADEMIC_PORTFOLIO: {
      return {
        ...action.payload,
      };
    }

    default:
      return state;
  }
}
