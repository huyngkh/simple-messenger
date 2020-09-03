import { useEffect, useState } from 'react';

let state = {
  name: 'Huy Nguyen',
  activeId: 1,
  friends: [
    {
      id: 1, name: 'Morten Hillbom', messages: [
        { "name": "Morten Hillbom", "time": new Date(2020, 8, 1), "content": "Hei Huy", "isOwner": false }
    ] },
    { id: 2, name: 'Remy Lorensen', messages: [
      { "name": "Remy Lorensen", "time": new Date(2020, 8, 1), "content": "That is why it doesn't work", "isOwner": false }
    ] },
    { id: 3, name: 'Michael Habørg', messages: [
      { "name": "Michael Habørg", "time": new Date(2020, 8, 1), "content": "Meet up this evening?", "isOwner": false }
    ] },
    { id: 4, name: 'Harry Potter', messages: [
      { "name": "Harry Potter", "time": new Date(2020, 8, 1), "content": "Do you know Grinfinndor reveals a new secret.", "isOwner": false }
    ] },
    { id: 5, name: 'Maria Jacoberg', messages: [
      { "name": "Maria Jacoberg", "time": new Date(2020, 8, 1), "content": "Bye bye.", "isOwner": false }
    ] },
    { id: 6, name: 'Sopiha Gibson', messages: [
      { "name": "Maria Jacoberg", "time": new Date(2020, 8, 1), "content": "Bye bye.", "isOwner": false }
    ] }
  ]
};
let listeners = [];

const setState = (newState) => {
  state = { ...state, ...newState };

  listeners.forEach(listener => {
    listener(state);
  });
}

const useMessageHook = () => {
  const newListener = useState()[1];

  useEffect(() => {
    listeners.push(newListener);

    return () => {
      listeners = listeners.filter(listener => listener !== newListener);
    };
  })

  return [state, setState];
}

export default useMessageHook;