import kegListReducer from './keg-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  kegListReducer,
});

export default rootReducer;
