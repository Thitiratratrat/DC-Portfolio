import {combineReducers} from 'redux';
import authenticationReducer from './authentication';
import viewReducer from './view';
import userReducer from './user';
import studentReducer from './student';
import employerReducer from './employer';

const rootReducer = combineReducers({
  authentication: authenticationReducer,
  view: viewReducer,
  user: userReducer,
  student: studentReducer,
  employer: employerReducer,
});

export default rootReducer;
