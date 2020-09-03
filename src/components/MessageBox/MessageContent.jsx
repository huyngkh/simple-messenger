import React from 'react';
import MessageContentItem from './MessageContentItem';
import useMessageHook from '../../share/useMessageHook';

function MessageContent() {
  const msgData = useMessageHook()[0];
  const { friends, activeId } = msgData;
  const friend = friends.find(friend => friend.id === activeId);
  const { messages } = friend;

  return (
    <div className="px-4 py-5 chat-box bg-white">
      {
        messages.map(message => {
          return <MessageContentItem message={message} />;
        })
      }
    </div>
  );
};

export default MessageContent;