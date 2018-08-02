import React from 'react';
import PropTypes from 'prop-types';

import SentMessage from 'message-list/components/sent-message';
import ReceivedMessage from 'message-list/components/received-message';

const Message = ({ direction, authorPic, text }) => {
  const MessageType = direction === 'in' ? ReceivedMessage : SentMessage;

  return <MessageType authorPic={authorPic} text={text} />;
};

Message.propTypes = {
  direction: PropTypes.oneOf(['in', 'out']).isRequired,
  authorPic: PropTypes.string,
  text: PropTypes.string,
};

Message.defaultProps = {
  authorPic: null,
  text: '',
};

export default Message;
