import React from 'react';

function MessageContentItem() {
  return (
    <div class="media w-50 mb-3">
      <p avatar="HN" />
      <div class="media-body ml-3">
        <div class="bg-light rounded py-2 px-3 mb-2">
          <p class="text-small mb-0 text-muted">A message here is from a friend. Are you ready? </p>
        </div>
        <p class="small text-muted">12:00 PM | Aug 13</p>
      </div>
    </div>
  );
};

export default MessageContentItem;