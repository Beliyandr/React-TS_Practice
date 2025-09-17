export function createStore(
  reducer,
  initialState = reducer(undefined,{})
  ) {
  let callbacks = new Set();
  let state = initialState;

  return {
    dispatch(action) {
      state = reducer(state, action);

      callbacks.forEach((callback) => callback());
    },
    subscribe(callback) {
      callbacks.add(callback);

      return () => {
        callbacks.delete(callback);
      };
    },
    getState() {
      return state;
    },
  };
}
