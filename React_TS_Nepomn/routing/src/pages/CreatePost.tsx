import React from "react";
import { useAuth } from "../hook/useAuth";
import { useNavigate } from "react-router-dom";

export const CreatePost = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <div>
      <h1>CreatePost</h1>
      <button onClick={() => signout(() => navigate("/", { replace: true }))}>
        LogOut
      </button>
    </div>
  );
};
