import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import state from './initial-state';
import reducers from './reducers';

export const initialState = state;

export default combineReducers({
  routing: routerReducer,
  ...reducers,
});