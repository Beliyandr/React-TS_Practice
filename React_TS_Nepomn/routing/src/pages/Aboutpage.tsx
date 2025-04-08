import React from "react";
import { Link, Outlet } from "react-router-dom";

export const Aboutpage = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="contacts">Contacts</Link>
        </li>
        <li>
          <Link to="team">Team</Link>
        </li>
      </ul>
      <div>
        <h1>About us</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam optio
          cupiditate cumque quod aspernatur consectetur voluptatibus obcaecati
          odit, rem modi, laudantium architecto quo inventore ad consequatur
          necessitatibus. Numquam, ea culpa.
        </p>
        <Outlet />
        {/* <Routes>
          <Route path="contacts" element={<p>Our contacts</p>}></Route>
          <Route path="team" element={<p>Our Team</p>}></Route>
        </Routes> */}
      </div>
    </>
  );
};
