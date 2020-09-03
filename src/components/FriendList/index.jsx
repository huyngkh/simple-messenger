import React from 'react';
import FriendListItem from './FriendListItem';
import useMessageHook from '../../share/useMessageHook';

function FriendList() {
  const [msgData, setMsgData] = useMessageHook();
  const { friends, activeId } = msgData;
  const friend = friends.find(friend => friend.id === activeId);
  const { messages } = friend;

  return (
    <div className="col-5 px-0">
      <div className="bg-white">

        <div className="bg-gray px-4 py-2 bg-light">
          <p className="h5 mb-0 py-1">Messenger app</p>
        </div>

        <div className="messages-box">
          <div className="list-group rounded-0">

            <div className="list-group-item list-group-item-action active text-white rounded-0">
              <div className="media">
                <p avatar="HN" />
                <div className="media-body ml-4">
                  <div className="d-flex align-items-center justify-content-between mb-1">
                    <h6 className="mb-0">Huy Nguyen</h6><small className="small font-weight-bold">2 Sep</small>
                  </div>
                  <p className="font-italic mb-0 text-small">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                </div>
              </div>
            </div>
            {
              friends.map(friend => {
                const {name, messages } = friend;
                const lastMessage = messages.length > 0 ? messages[messages.length - 1] : 0;
                return <FriendListItem active={false} name={name} lastMessage={lastMessage} />;
              })
            }

          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendList;