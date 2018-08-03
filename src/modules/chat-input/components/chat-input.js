import React from 'react';
import PropTypes from 'prop-types';

class ChatInput extends React.Component {
  static propTypes = {
    onChangeValue: PropTypes.func.isRequired,
    onSend: PropTypes.func.isRequired,
    value: PropTypes.string,
  };

  static defaultProps = {
    value: '',
  };

  onKeyPressHandler = (event) => {
    if (event.charCode !== 13) return;

    const { onSend } = this.props;
    onSend(event);
  };

  render() {
    const { onChangeValue, value, onSend } = this.props;

    return (
      <div>
        <input onChange={onChangeValue} value={value} onKeyPress={this.onKeyPressHandler} />
        <button onClick={onSend} type="button">
          Send
        </button>
      </div>
    );
  }
}

export default ChatInput;
