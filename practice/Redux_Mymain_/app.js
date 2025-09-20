import { store } from "./store/index.js";
import { actions as amountActions } from "./store/amount.js";
import { actions as goodsActions } from "./store/goods.js";
import { actions as positionActions } from "./store/position.js";

const { subscribe, getState, dispatch } = store;

const state = getState();
console.log(state);

const unsubscribe = subscribe(() => {
  const state = getState();
  console.log(state);
});

dispatch(amountActions.add(50));
dispatch(positionActions.moveUp());
dispatch(positionActions.moveLeft());
dispatch(positionActions.moveUp());
dispatch(positionActions.moveUp());
dispatch(amountActions.take(10));
dispatch(amountActions.take(40));
dispatch(goodsActions.take('40'));
dispatch(amountActions.take(40));
dispatch(goodsActions.take(40));
dispatch(amountActions.clear());

unsubscribe();
