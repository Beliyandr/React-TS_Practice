import React, { FC } from "react";
import { Cell } from "../models/Cell";

interface Props {
  cell: Cell;
}

export const CellComponent: FC<Props> = ({ cell }) => {
  return <div className={["cell", cell.color].join(" ")}>{cell.figure}</div>;
};
