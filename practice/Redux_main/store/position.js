const initialState = {
  x: 0,
  y: 0,
};

export function reducer(
  state = initialState,
  action,
) {
  const reducers = {
    moveUp: () => ({
      ...state,
      y: state.y - 1,
    }),
    moveDown: () => ({
      ...state,
      y: state.y + 1,
    }),
    moveLeft: () => ({
      ...state,
      x: state.x - 1,
    }),
    moveRight: () => ({
      ...state,
      x: state.x + 1,
    }),
  };
}