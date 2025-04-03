import React from 'react'
import { Link } from 'react-router-dom'



export const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/home">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/posts">Posts</Link>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </nav>
  )
}
