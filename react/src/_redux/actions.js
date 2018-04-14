import keyMirror from 'keymirror';

export const ActionTypes = keyMirror({
  SET_TEXT: null,
})

function setText(text) {
  return (dispatch) => dispatch({
      type: ActionTypes.SET_TEXT,
      value: text
  });
}

export default {
  setText,
}