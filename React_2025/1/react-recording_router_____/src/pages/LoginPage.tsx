import { useLocation, useNavigate } from "react-router-dom";
import React, { useContext, useState } from "react";
import { AuthContext } from "../store/AuthContext";

export const LoginPage = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();
  const { state } = useLocation();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setErrorMessage("");

    login(username, password)
      .then(() => {
        navigate(state?.pathname || "/", { replace: true });
        setUserName("");
        setPassword("");
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => {
          setUserName(e.target.value);
          setErrorMessage("");
        }}
      />
      <input
        type="text"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          setErrorMessage("");
        }}
      />
      <button>Sign in</button>
      {errorMessage && <p>{errorMessage}</p>}
    </form>
  );
};
