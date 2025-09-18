import { reducer as amountReducer } from "./amount.js";
import { reducer as goodsReducer } from "./goods.js";
import { reducer as positionReducer } from "./position.js";
import { combineReducers, createStore } from "../redux.js";


const rootReducer = combineReducers({
  amount: amountReducer,
  goods: goodsReducer,
  position: positionReducer
})

export const store = createStore(rootReducer);
