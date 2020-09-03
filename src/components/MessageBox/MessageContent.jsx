import React from 'react';
import MessageContentItem from './MessageContentItem';

function MessageContent() {
  return (
    <div class="px-4 py-5 chat-box bg-white">
      <MessageContentItem />
      <MessageContentItem />
      <MessageContentItem />
      <MessageContentItem />
      <div class="media w-50 ml-auto mb-3">
        <div class="media-body">
          <div class="bg-primary rounded py-2 px-3 mb-2">
            <p class="text-small mb-0 text-white">Hei hei! We have an interview today.</p>
          </div>
          <p class="small text-muted">12:00 PM | Sep 1</p>
        </div>
      </div>
    </div>
  );
};

export default MessageContent;