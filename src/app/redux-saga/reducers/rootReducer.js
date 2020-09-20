import { combineReducers } from 'redux';
import history from './history';
import launches from './launches';

export default combineReducers({
  history,
  launches,
});
