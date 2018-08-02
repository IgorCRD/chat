import React from 'react';
import PropTypes from 'prop-types';

const SentMessage = ({ text }) => <span>{`${text}`}</span>;

SentMessage.propTypes = {
  text: PropTypes.string,
};

SentMessage.defaultProps = {
  text: '',
};

export default SentMessage;
