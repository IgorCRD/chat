import React from 'react';

import MessageList from 'message-list/components/message-list';

const MessageListContainer = () => {
  const messages = [
    {
      key: '1',
      authorPic: 'pic1',
      text: 'test1',
      direction: 'in',
    },
    {
      key: '2',
      text: 'test2',
      direction: 'out',
    },
    {
      key: '3',
      authorPic: 'pic3',
      text: 'test3',
      direction: 'in',
    },
  ];

  return <MessageList messages={messages} />;
};

export default MessageListContainer;
