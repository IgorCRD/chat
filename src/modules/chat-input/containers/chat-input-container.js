import React from 'react';
import { connect } from 'react-redux';
import uuidv4 from 'uuid/v4';
import PropTypes from 'prop-types';

import ChatInput from 'chat-input/components/chat-input';
import * as MessageListActions from 'message-list/actions/message-list-actions';
import ProfilePic from 'assets/images/profilePic.jpg';

function getMessageType(messageNumber) {
  const modThree = messageNumber % 4;
  return modThree === 0 || modThree === 1 ? 'in' : 'out';
}

class ChatInputContainer extends React.Component {
  static propTypes = {
    addMessage: PropTypes.func.isRequired,
  };

  state = {
    inputValue: '',
    messageNumber: 0,
  };

  onChangeValueHandler = (event) => {
    const {
      target: { value },
    } = event;
    this.setState({ inputValue: value });
  };

  onSendHandler = () => {
    const { addMessage } = this.props;
    const { inputValue, messageNumber } = this.state;
    if (inputValue.trim().length === 0) return;

    const messageType = getMessageType(messageNumber);
    addMessage(uuidv4(), messageType === 'in' ? ProfilePic : 'null', inputValue, messageType);

    this.setState(state => ({
      messageNumber: state.messageNumber + 1,
      inputValue: '',
    }));
  };

  render() {
    const { inputValue } = this.state;
    return (
      <ChatInput
        value={inputValue}
        onChangeValue={this.onChangeValueHandler}
        onSend={this.onSendHandler}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addMessage(key, authorPic, text, direction) {
    dispatch(MessageListActions.addMessage(key, authorPic, text, direction));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(ChatInputContainer);
