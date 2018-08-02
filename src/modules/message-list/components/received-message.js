import React from 'react';
import PropTypes from 'prop-types';

const ReceivedMessage = ({ authorPic, text }) => <span>{`${authorPic} ${text}`}</span>;

ReceivedMessage.propTypes = {
  authorPic: PropTypes.string,
  text: PropTypes.string,
};

ReceivedMessage.defaultProps = {
  authorPic: null,
  text: '',
};

export default ReceivedMessage;
