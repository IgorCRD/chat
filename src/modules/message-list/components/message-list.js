import React from 'react';
import PropTypes from 'prop-types';

import Message from 'message-list/components/message';

const MessageList = ({ messages }) => (
  <React.Fragment>
    <div>
      {`${messages.length} Online Requests ${messages.length} Offline Requests`}
    </div>
    <div>
      <ul>
        {messages.map(({
          key, authorPic, text, direction,
        }) => (
          <li key={key}>
            <Message authorPic={authorPic} text={text} direction={direction} />
          </li>
        ))}
      </ul>
    </div>
  </React.Fragment>
);

MessageList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      authorPic: PropTypes.string,
      text: PropTypes.string,
      direction: PropTypes.string.isRequired,
    }),
  ),
};

MessageList.defaultProps = {
  messages: [],
};

export default MessageList;
