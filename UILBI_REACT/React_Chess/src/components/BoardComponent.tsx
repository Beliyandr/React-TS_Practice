import React, { FC, useEffect, useState } from "react";
import { Board } from "../models/Board";
import { CellComponent } from "./CellComponent";
import { Cell } from "../models/Cell";

interface Props {
  board: Board;
  setBoard: (border: Board) => void;
}

export const BoardComponent: FC<Props> = ({ board, setBoard }) => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

  function click(cell: Cell) {
    if (cell.figure) {
      setSelectedCell(cell);
    }
  }

  useEffect(() => {
    hightLightCells();
  }, [selectedCell]);

  function hightLightCells() {
    board.hightLightCells(selectedCell);
    updateBoard();
  }

  function updateBoard() {
    const newBoard = board.getCopyBoard();
    setBoard(newBoard);
  }

  return (
    <div className="board">
      {board.cells.map((row, index) => (
        <React.Fragment key={index}>
          {row.map((cell) => (
            <CellComponent
              key={cell.id}
              click={click}
              cell={cell}
              selected={
                cell.x === selectedCell?.x && cell.y === selectedCell?.y
              }
            ></CellComponent>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};
