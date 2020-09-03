import React from 'react';
import { formatAvatarLetters } from '../../share/utils';

function FriendListItem({ active, name, lastMessage }) {
  const { time, content } = lastMessage;
  const truncateMessage = (msg) => {
    return msg;
  }

  return (
    <div className={`list-group-item list-group-item-action  rounded-0 ${active ? 'active text-white' : 'list-group-item-light'}`}>
      <div className="media">
        <p avatar={formatAvatarLetters(name)} />
        <div className="media-body ml-4">
          <div className="d-flex align-items-center justify-content-between mb-1">
            <h6 className="mb-0">{name}</h6><small className="small font-weight-bold">
              {time ? `${time.getDay()} ${time.toLocaleString('en-us', { month: 'short' })}` : ''}
            </small>
          </div>
          <p className="font-italic text-muted mb-0 text-small">{truncateMessage(content)}</p>
        </div>
      </div>
    </div>
  );
};

export default FriendListItem;