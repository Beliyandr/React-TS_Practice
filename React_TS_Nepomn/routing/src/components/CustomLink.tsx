import { Link, useMatch } from "react-router-dom";

import React from "react";

type Props = {
  children: React.ReactNode;
  to: string;
  props?: any;
};

export const CustomLink: React.FC<Props> = ({ children, to, ...props }) => {
  const match = useMatch(to);

  console.log({ match });

  return (
    <Link
      to={to}
      {...props}
      style={{ color: match ? "var(--color-active)" : "white" }}
    >
      {children}
    </Link>
  );
};
