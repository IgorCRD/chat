import React from 'react';
import PropTypes from 'prop-types';

const SentMessage = ({ text }) => (
  <div>
    <span>{`${text}`}</span>
  </div>
);

SentMessage.propTypes = {
  text: PropTypes.string,
};

SentMessage.defaultProps = {
  text: '',
};

export default SentMessage;
