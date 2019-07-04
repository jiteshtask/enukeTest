import { combineReducers } from 'redux';

import user from './user_reducer';
import userError from './user_error';

export const userReducer= combineReducers({
  user,
  userError
});