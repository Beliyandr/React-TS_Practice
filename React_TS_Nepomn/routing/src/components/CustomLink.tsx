import { Link, useMatch } from "react-router-dom";

import React from "react";

type Props = {
  children: React.ReactNode;
  to: string;
  props?: any;
};

export const CustomLink: React.FC<Props> = ({ children, to, ...props }) => {
  const match = useMatch({
    path: to,
    end: to.length === 1,
  });

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
