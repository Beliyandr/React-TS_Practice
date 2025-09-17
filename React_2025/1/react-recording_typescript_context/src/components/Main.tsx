import React, { useContext, useReducer } from "react";
import { Lang } from "../types/Lang";
import { DispatchContext, StateContext } from "./Store";

export const Main = () => {
  const dispatch = useContext(DispatchContext);
  const { amount } = useContext(StateContext);

  const decrease = () => {
    dispatch({ type: "decrease" });
  };

  const increase = () => {
    dispatch({ type: "increase" });
  };

  return (
    <main>
      <button onClick={decrease}>-</button>
      {amount}
      <button onClick={increase}>+</button>
    </main>
  );
};
