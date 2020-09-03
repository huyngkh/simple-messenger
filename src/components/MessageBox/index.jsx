import React from 'react';
import MessageContent from './MessageContent';
import MessageSender from './MessageSender';

function MessageBox() {
  return (
    <div class="col-7 px-0">
      <MessageContent />
      <MessageSender />
    </div>
  );
};

export default MessageBox;