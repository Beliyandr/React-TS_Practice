import { createStore } from './redux.js';
import { reducer } from './amount.js';

export const store = createStore(reducer, 100);
