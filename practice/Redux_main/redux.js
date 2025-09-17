export function createStore(
  reducer, 
  initialState,
) {
  let callbacks = new Set();
  let state = initialState;

  return {
    dispatch(action) {
      state = reducer(state, action);
  
      callbacks.forEach(callback => callback());
    },
    subscribe(callback) {
      callbacks.add(callback);
    },
    getState() {
      return state;
    }
  };
}
