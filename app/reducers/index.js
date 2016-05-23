import { combineReducers } from 'redux';
import counter from './counter';
import user from './user';
import entities from './entities'

export default combineReducers({
  counter,
  user,
  //entities,
});