export const ADD_MESSAGE = 'ADD_MESSAGE';

export function addMessage(key, authorPic, text, direction) {
  return {
    type: ADD_MESSAGE,
    message: {
      key,
      authorPic,
      text,
      direction,
    },
  };
}
