import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import MessageList from 'message-list/components/message-list';

const MessageListContainer = ({ messages }) => <MessageList messages={messages} />;

MessageListContainer.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    authorPic: PropTypes.string,
    text: PropTypes.string,
    direction: PropTypes.string.isRequired,
  })),
};

MessageListContainer.defaultProps = {
  messages: [],
};

const mapStateToProps = ({ messageList }) => ({
  messages: messageList.messages,
});

export default connect(mapStateToProps)(MessageListContainer);
