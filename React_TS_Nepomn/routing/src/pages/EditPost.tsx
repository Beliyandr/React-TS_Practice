import React from "react";
import { useParams } from "react-router-dom";

export const EditPost = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Edit Posts {id}</h1>
    </div>
  );
};
