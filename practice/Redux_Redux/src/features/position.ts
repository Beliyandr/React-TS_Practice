const MOVE_LEFT = "position/MOVE_LEFT";
const MOVE_RIGHT = "position/MOVE_RIGHT";
const MOVE_UP = "position/MOVE_UP";
const MOVE_DOWN = "position/MOVE_DOWN";

type MoveLeftAction = { type: "position/MOVE_LEFT" };
type MoveRiGHTAction = { type: "position/MOVE_RIGHT" };
type MoveUpAction = { type: "position/MOVE_UP" };
type MoveDownAction = { type: "position/MOVE_DOWN" };

type Action = MoveLeftAction | MoveRiGHTAction | MoveUpAction | MoveDownAction;

const startPosition = { x: 0, y: 0 };

const positionReducer = (position = startPosition, action: Action) => {
  return position;
};

export default positionReducer;
