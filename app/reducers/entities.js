import merge from 'lodash/merge';
import * as types from '../actions/actionTypes';
import { combineReducers } from 'redux';

// Manage state using normalizr
const items = (state = {}, action) => {
  switch(action.type) {
    default:
      if (action.entities && action.entities.items) {
        return merge({}, state, action.entities.items);
      }
      return state;
  }
};

export default combineReducers({
  items,
});
