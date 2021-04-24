import {SET_STUDENT_PORTFOLIO} from '../actionTypes/employer';

const setStudentPortfolio = portfolio => ({
  type: SET_STUDENT_PORTFOLIO,
  payload: portfolio,
});

export default {setStudentPortfolio};
