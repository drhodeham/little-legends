import { ActionTypes } from './actions';
import initialState from './initial-state';

function text(state=initialState.text, event) {
  switch (event.type) {
    case ActionTypes.SET_TEXT:
      return event.value;
    default:
      return state;
  }
}

export default {
  text,
}