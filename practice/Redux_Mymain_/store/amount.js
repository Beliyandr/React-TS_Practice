import { createSlice } from '../redux.js';

export const { reducer, actions } = createSlice({
  name: 'amount',
  initialState: 100,
  reducers: {
    add: (amount, payload) => amount + payload,
    take: (amount, payload) => amount - payload,
    clear: () => 0,
  }
})
