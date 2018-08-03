import React from 'react';
import PropTypes from 'prop-types';

const ChatInput = ({ value, onChangeValue, onSend }) => (
  <div>
    <input onChange={onChangeValue} value={value} />
    <button onClick={onSend}>Send</button>
  </div>
);

ChatInput.propTypes = {
  onChangeValue: PropTypes.func.isRequired,
  onSend: PropTypes.func.isRequired,
  value: PropTypes.string,
};

ChatInput.defaultProps = {
  value: '',
};

export default ChatInput;
