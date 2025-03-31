import { Link, Outlet, NavLink, useParams } from "react-router-dom";
import React from "react";
import classNames from "classnames";

type Page = "home" | "users" | "posts" | "postDetails" | "newPost";

const getLinkClass = ({ isActive }: { isActive: boolean }) =>
  classNames("navbar-item", { "is-active": isActive });

const getLinkStyle = ({ isActive }: { isActive: boolean }) => ({
  color: isActive ? "red" : "",
});

export const App: React.FC = () => {

  const { userId } = useParams()

  return (
    <>
      <nav className="navbar is-light px-3">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <img src="/logo.svg" alt="MA" className="logo" />
          </Link>

          <NavLink to="/" className={getLinkClass} style={getLinkStyle}>
            Home
          </NavLink>

          <NavLink to="/users" end className={getLinkClass} style={getLinkStyle}>
            Users
          </NavLink>

          <NavLink to="/posts" className={getLinkClass} style={getLinkStyle}>
            Posts
          </NavLink>

          {userId && <NavLink to={`/users/${userId}/posts`} className={getLinkClass} style={getLinkStyle}>
            User {userId} Posts
          </NavLink>}
        </div>
      </nav>

      <div className="section">
        <Outlet />
      </div>
    </>
  );
};
