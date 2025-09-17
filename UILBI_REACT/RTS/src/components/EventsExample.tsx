import React, { useRef, useState } from "react";

export const EventsExample: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const [isDrag, setIsDrag] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(value);
    console.log(inputRef.current?.value);
  };

  const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
    console.log("Drag");
  };

  const dragWithPreventHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDrag(true);
  };

  const leaveHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDrag(false);
  };

  const dropHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDrag(false);

    console.log("DROP");
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={changeHandler}
        placeholder="управляемый"
      />
      <input type="text" ref={inputRef} placeholder="Неуправляемый" />
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
          background: isDrag ? "blue" : "green",
          margin: "10px 5px",
        }}
      ></div>
    </div>
  );
};
