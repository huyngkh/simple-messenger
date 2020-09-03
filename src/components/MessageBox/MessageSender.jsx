import React, { useState } from 'react';
import useMessageHook from '../../share/useMessageHook';

function MessageSender() {
  const [message, setMessage] = useState();
  const [msgData, setMsgData] = useMessageHook();
  const { friends, activeId } = msgData;
  const friend = friends.find(friend => friend.id === activeId);

  const sendMessage = (e) => {
    // we will handle submit by our code
    e.preventDefault();

    if (friend) {
      const { name, messages } = friend;
      const objMsg = {
        name,
        time: new Date(),
        content: message,
        isOwner: true
      };
      messages.push(objMsg);
      setMsgData({ ...msgData, friends });
      setMessage('');
    }
  };

  return (
    <form className="bg-light" onSubmit={sendMessage}>
      <div className="input-group">
        <input value={message} onChange={e => setMessage(e.target.value)}
          type="text" placeholder="Type a message" aria-describedby="button-addon2" className="form-control rounded-0 border-0 py-4 bg-light" />
        <div className="input-group-append">
          <button id="button-addon2" type="submit" className="btn btn-link"> <i className="fa fa-paper-plane"></i></button>
        </div>
      </div>
    </form>
  );
};

export default MessageSender;