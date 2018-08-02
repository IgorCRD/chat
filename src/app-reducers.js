import { combineReducers } from 'redux';
import messageListReducer from 'message-list/reducers/message-list-reducer';

export default combineReducers({ messageList: messageListReducer });
