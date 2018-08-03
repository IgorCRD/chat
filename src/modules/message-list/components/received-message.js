import React from 'react';
import PropTypes from 'prop-types';

const ReceivedMessage = ({ authorPic, text }) => (
  <div>
    <img src={authorPic} alt="sender profile pic" width="40px" height="40px" />
    <span>{`${text}`}</span>
  </div>
);

ReceivedMessage.propTypes = {
  authorPic: PropTypes.string,
  text: PropTypes.string,
};

ReceivedMessage.defaultProps = {
  authorPic: null,
  text: '',
};

export default ReceivedMessage;
