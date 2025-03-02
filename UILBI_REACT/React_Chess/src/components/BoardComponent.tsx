import React, { FC } from "react";
import { Board } from "../models/Board";
import { CellComponent } from "./CellComponent";

interface Props {
  board: Board;
  setBoard: (border: Board) => void;
}

export const BoardComponent: FC<Props> = ({ board, setBoard }) => {
  return (
    <div className="board">
      {board.cells.map((row, index) => (
        <React.Fragment key={index}>
          {row.map((cell) => (
            <CellComponent cell={cell} key={cell.id}></CellComponent>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};
