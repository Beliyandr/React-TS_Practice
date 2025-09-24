import { useState } from "react";
import { useAppSelector } from "../app/hooks";
import { useDispatch } from "react-redux";
import { actions as positionActions } from "../features/position";
import { Dispatch } from "@reduxjs/toolkit";

function wait(delay: number) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}
const doACircle = async (dispatch: Dispatch) => {
  dispatch(positionActions.moveRight());
  await wait(300);
  dispatch(positionActions.moveDown());
  await wait(300);
  dispatch(positionActions.moveLeft());
  await wait(300);
  dispatch(positionActions.moveUp());
};

export const Position = () => {
  const dispatch = useDispatch();
  const { x, y } = useAppSelector((state) => state.position);

  const moveLeft = () => dispatch(positionActions.moveLeft());
  const moveRight = () => dispatch(positionActions.moveRight());
  const moveUp = () => dispatch(positionActions.moveUp());
  const moveDown = () => dispatch(positionActions.moveDown());

  const transformValue = `translate(${x * 100}%, ${y * 100}%)`;

  const dance = () => {
    doACircle(dispatch);
  };

  return (
    <section className="position">
      <h2>Position:</h2>

      <div className="position__content">
        <div className="buttons">
          <button onClick={moveUp}>&uarr;</button>

          <div>
            <button onClick={moveLeft}>&larr;</button>
            <strong>
              {x}:{y}
            </strong>
            <button onClick={moveRight}>&rarr;</button>
          </div>

          <button onClick={moveDown}>&darr;</button>
        </div>

        <div className="field">
          <div
            className="track"
            style={{ transform: transformValue, cursor: "pointer" }}
            onClick={dance}
          >
            {x + y}
          </div>
        </div>
      </div>
    </section>
  );
};
