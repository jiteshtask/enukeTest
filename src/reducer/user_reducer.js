import { fromJS } from 'immutable';

import {
  LOGIN
} from '../action/user_action_types';

const INITIAL_STTATE= fromJS({
  userInfo: ''
})

export default function(state= INITIAL_STTATE, action) {
  switch(action.type) {
    case LOGIN: {
      return fromJS({
        userInfo: action.payload
      })
    }
  }
  return state;
}