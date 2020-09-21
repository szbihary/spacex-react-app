import { combineReducers } from 'redux';
import history from './history';
import launches from './launches';
import orbits from './orbits';

export default combineReducers({
  history,
  launches,
  orbits,
});
