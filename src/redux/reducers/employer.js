import {SET_STUDENT_PORTFOLIO} from '../actionTypes/employer';

const initialState = {
  studentPortfolio: {
    purpose: '',
    activity: '',
    experience: '',
    education: '',
    skills: '',
    awards: '',
    projects: '',
    firstName: '',
    lastName: '',
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_STUDENT_PORTFOLIO: {
      return {
        studentPortfolio: action.payload,
      };
    }

    default:
      return state;
  }
}
