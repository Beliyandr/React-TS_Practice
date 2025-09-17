import { store } from './store/index.js';

const { subscribe, getState, dispatch } = store;

subscribe(() => {
  const amount = getState();
  console.log(amount);
})

dispatch({ type: 'add', payload: 20 });
dispatch({ type: 'take', payload: 50 });
dispatch({ type: 'add', payload: 40 });
dispatch({ type: 'clear' });
