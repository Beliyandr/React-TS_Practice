import React from "react";
import { Link, Outlet, NavLink } from "react-router-dom";

export const App: React.FC = () => {
  return (
    <>
      <nav className="navbar is-light px-3">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <img src="/logo.svg" alt="MA" className="logo" />
          </Link>

          <NavLink to="/" className="navbar-item is-active">
            Home
          </NavLink>

          <NavLink to="/users" className="navbar-item">
            Users
          </NavLink>

          <NavLink to="/posts" className="navbar-item">
            Posts
          </NavLink>
        </div>
      </nav>

      <div className="section">
        <Outlet />
      </div>
    </>
  );
};
