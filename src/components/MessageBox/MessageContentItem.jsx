import React from 'react';
import { formatAvatarLetters } from '../../share/utils';

function MessageContentItem({ message }) {
  const { name, content, time, isOwner } = message;
  const formatDateTime = (dt) => {
    return `${dt.toLocaleDateString('en-US')} | ${dt.toLocaleTimeString('en-US')}`;
  };
  console.log(JSON.stringify(message));
  return (
    <div className={`media w-50 mb-3 ${isOwner ? 'ml-auto': ''}`}>
      {isOwner ? '' : <p avatar={formatAvatarLetters(name)} />}
      <div className={`media-body ${isOwner ? 'ml-3': ''}`}>
        <div className={`${isOwner ? 'bg-primary': 'bg-light'} rounded py-2 px-3 mb-2`}>
          <p className={`text-small mb-0 ${isOwner ? 'text-white': 'text-muted'}`}>{content}</p>
        </div>
        <p className="small text-muted">{formatDateTime(time)}</p>
      </div>
    </div>
  );
};

export default MessageContentItem;