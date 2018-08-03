import * as messageListActions from 'message-list/actions/message-list-actions';

const initialState = {
  messages: [],
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
