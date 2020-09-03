import React from 'react';
import './App.css';
import FriendList from './components/FriendList';
import MessageBox from './components/MessageBox';

function App() {
  return (
    <div class="container py-5 px-4">
      <div class="row rounded-lg overflow-hidden shadow">
        <FriendList />
        <MessageBox />
      </div>
    </div>
  );
}

export default App;
