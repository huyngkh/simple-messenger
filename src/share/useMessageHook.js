import { useEffect, useState } from 'react';

let state = {
  name: 'Huy Nguyen',
  activeId: 1,
  friends: [
    { id: 1, name: 'Morten Hillbom', messages: [] },
    { id: 2, name: 'Remy Lorensen', messages: [] },
    { id: 3, name: 'Michael Habørg', messages: [] },
    { id: 4, name: 'Harry Potter', messages: [] },
    { id: 5, name: 'Maria Jacoberg', messages: [] },
    { id: 6, name: 'Sopiha Gibson', messages: [] }
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
    listeners.append(newListener);

    return () => {
      listeners = listeners.filter(listener => listener !== newListener);
    };
  })

  return [state, setState];
}

export default useMessageHook;