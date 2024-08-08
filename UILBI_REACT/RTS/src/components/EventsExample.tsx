import React, { useState } from "react";

export const EventsExample: React.FC = () => {
  const [value, setValue] = useState<string>("");

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(value);
  };

  const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
    console.log("Drag");
  };

  function leaveHandler(event: React.DragEvent<HTMLDivElement>): void {
    throw new Error("Function not implemented.");
  }

  const dragWithPreventHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };
  const dropHandler = () => {};

  return (
    <div>
      <input type="text" value={value} onChange={changeHandler} />
      <button onClick={clickHandler}>Click</button>

      <div
        draggable
        onDrag={dragHandler}
        style={{
          width: "200px",
          height: "200px",
          background: "red",
          margin: "10px 5px",
        }}
      ></div>
      <div
        onDrop={dropHandler}
        onDragLeave={leaveHandler}
        onDragOver={dragWithPreventHandler}
        style={{
          width: "200px",
          height: "200px",
          background: "green",
          margin: "10px 5px",
        }}
      ></div>
    </div>
  );
};
