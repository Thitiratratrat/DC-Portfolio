import {SELECT_STUDENT} from '../actionTypes/view';

const initialState = {
  selectedStudent: {firstName: '', lastName: ''},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SELECT_STUDENT: {
      return {selectedStudent: action.payload};
    }

    default:
      return state;
  }
}
