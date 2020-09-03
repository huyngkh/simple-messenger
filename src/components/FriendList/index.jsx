import React from 'react';
import FriendListItem from './FriendListItem';

function FriendList() {
  return (
    <div class="col-5 px-0">
      <div class="bg-white">

        <div class="bg-gray px-4 py-2 bg-light">
          <p class="h5 mb-0 py-1">Messenger app</p>
        </div>

        <div class="messages-box">
          <div class="list-group rounded-0">

            <div class="list-group-item list-group-item-action active text-white rounded-0">
              <div class="media">
              <p avatar="HN" />
                <div class="media-body ml-4">
                  <div class="d-flex align-items-center justify-content-between mb-1">
                    <h6 class="mb-0">Huy Nguyen</h6><small class="small font-weight-bold">2 Sep</small>
                  </div>
                  <p class="font-italic mb-0 text-small">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                </div>
              </div>
            </div>
            
            <FriendListItem />

            <FriendListItem />

          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendList;