import React from 'react'



export const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/home">Home</a>
          <a href="/login">Login</a>
          <a href="/posts">Posts</a>
          <a href="/dashboard">Dashboard</a>
        </li>
      </ul>
    </nav>
  )
}
