import { combineReducers } from 'redux';
import mathReducer from './mathReducer';
import userReducer from './userReducer';
import testReducer from './testRecuder';

export const rootReducer = combineReducers({
  math : mathReducer,
  user : userReducer,
  test : testReducer,
});


