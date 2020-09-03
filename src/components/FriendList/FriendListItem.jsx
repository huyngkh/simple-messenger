import React from 'react';

function FriendListItem() {
  return (
    <div href="#" class="list-group-item list-group-item-action list-group-item-light rounded-0">
      <div class="media">
        <p avatar="HN" />
        <div class="media-body ml-4">
          <div class="d-flex align-items-center justify-content-between mb-1">
            <h6 class="mb-0">Huy Nguyen</h6><small class="small font-weight-bold">14 Dec</small>
          </div>
          <p class="font-italic text-muted mb-0 text-small">Lorem ipsum dolor sit amet, consectetur. incididunt ut labore.</p>
        </div>
      </div>
    </div>
  );
};

export default FriendListItem;