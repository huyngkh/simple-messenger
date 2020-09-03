import React from 'react';
import FriendListItem from './FriendListItem';
import useMessageHook from '../../share/useMessageHook';

function FriendList() {
  const [msgData, setMsgData] = useMessageHook();
  const { friends, activeId } = msgData;
  const selectConversation = (friendId) => {
    setMsgData({ ...msgData, activeId: friendId });
  };

  return (
    <div className="col-5 px-0">
      <div className="bg-white">

        <div className="bg-gray px-4 py-2 bg-light">
          <p className="h5 mb-0 py-1">Messenger app</p>
        </div>

        <div className="messages-box">
          <div className="list-group rounded-0">
            {
              friends.map(friend => {
                return <FriendListItem active={activeId === friend.id} friend={friend} selectConversation={selectConversation} />;
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendList;