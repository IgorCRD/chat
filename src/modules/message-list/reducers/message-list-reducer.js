import * as messageListActions from 'message-list/actions/message-list-actions';

const initialState = {
  messages: [
    {
      key: '1',
      authorPic: 'pic1',
      text: 'test1',
      direction: 'in',
    },
    {
      key: '2',
      text: 'test2',
      direction: 'out',
    },
    {
      key: '3',
      authorPic: 'pic3',
      text: 'test3',
      direction: 'in',
    },
  ],
};

const messageListReducer = (state = initialState, action) => {
  switch (action.type) {
    case messageListActions.ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.message],
      };
    default:
      return state;
  }
};

export default messageListReducer;
