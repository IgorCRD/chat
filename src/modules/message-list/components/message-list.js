import React from 'react';
import PropTypes from 'prop-types';

import Message from 'message-list/components/message';

const MessageList = ({ messages }) => (
  <React.Fragment>
    {messages.map(({
 key, authorPic, text, direction,
}) => (
  <Message key={key} authorPic={authorPic} text={text} direction={direction} />
    ))}
  </React.Fragment>
);

MessageList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    authorPic: PropTypes.string,
    text: PropTypes.string,
    direction: PropTypes.string.isRequired,
  })),
};

MessageList.defaultProps = {
  messages: [],
};

export default MessageList;
