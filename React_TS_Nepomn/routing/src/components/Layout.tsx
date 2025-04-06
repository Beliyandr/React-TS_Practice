import React from "react";
import { Outlet } from "react-router-dom";
import { CustomLink } from "./CustomLink";

const setActive = ({ isActive }: { isActive: boolean }) =>
  isActive ? "active-link" : "";

export const Layout = () => {
  return (
    <>
      <header>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/posts">Blog</CustomLink>
        <CustomLink to="/about">About</CustomLink>
      </header>
      <main className="container">
        <Outlet />
      </main>

      <footer>2021</footer>
    </>
  );
};

{
  /* <NavLink
          to="/"
          className={setActive}
          // style={({ isActive }) => ({
          //   color: isActive ? "var(--color-active)" : "black",
          // })}
        >
          Home
        </NavLink>
        <NavLink to="/posts" className={setActive}>
          Blog
        </NavLink>
        <NavLink to="/about" className={setActive}>
          About
        </NavLink> */
}
