import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

export const Posts = () => {
  const location = useLocation()
  const params = useParams()
  console.log(params);
  return (
    <h1>Posts</h1>
  )
}
