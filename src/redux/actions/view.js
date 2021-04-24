import {SELECT_STUDENT} from '../actionTypes/view';

const selectStudent = name => ({
  type: SELECT_STUDENT,
  payload: name,
});

export default {selectStudent};
