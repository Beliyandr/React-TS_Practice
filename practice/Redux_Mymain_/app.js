import { store } from "./store/index.js";
import { actions } from "./store/amount.js";
const { subscribe, getState, dispatch } = store;

const unsubscribe = subscribe(() => {
  const amount = getState();
  console.log(amount);
});

dispatch(actions.add(50));
dispatch(actions.take(10));
dispatch(actions.take(40));
dispatch(actions.clear());

unsubscribe();
