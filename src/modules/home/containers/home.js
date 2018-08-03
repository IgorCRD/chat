import React from 'react';
import MessageListContainer from 'message-list/containers/message-list-container';
import ChatInputContainer from 'chat-input/containers/chat-input-container';
import styled from 'styled-components';

const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const Home = () => (
  <Center>
    <MessageListContainer />
    <ChatInputContainer />
  </Center>
);

export default Home;
