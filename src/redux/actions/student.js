import {SET_ACADEMIC_PORTFOLIO} from '../actionTypes/student';

const setAcademicPortfolio = portfolio => ({
  type: SET_ACADEMIC_PORTFOLIO,
  payload: portfolio,
});

export default {setAcademicPortfolio};
