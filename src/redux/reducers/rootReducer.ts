import {combineReducers} from 'redux';
import {ratedReducer} from './ratedReducer';

const rootReducer = combineReducers({
  rated: ratedReducer,
});

export default rootReducer;
