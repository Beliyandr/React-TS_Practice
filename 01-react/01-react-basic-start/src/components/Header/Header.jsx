import React, { useState } from "react";
// import "./Header.css";
import { styled } from "styled-components";

const HeaderContainer = styled.header`
  height: 50px;
  display: flex;
  padding: 0 2rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  background: #fafafa;
`;

export const Header = () => {
  const [date, setDate] = useState(new Date());

  setInterval(() => {
    setDate(new Date());
  }, 1000);

  return (
    <HeaderContainer>
      <h3>Result </h3>
      <span>{date.toLocaleTimeString()}</span>
    </HeaderContainer>
  );
};
