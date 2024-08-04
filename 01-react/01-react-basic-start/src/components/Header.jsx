import React, { useState } from "react";

export const Header = () => {
  const [date, setDate] = useState(new Date());

  setInterval(() => {
    setDate(new Date());
  }, 1000);

  return (
    <header>
      <h3>Result </h3>
      <span>{date.toLocaleTimeString()}</span>
    </header>
  );
};
