import classNames from "classnames";
import React, { useState } from "react";
import usersFromServer from "../api/users.json";
import { Post } from "../types/Post";
import getUserById from "../services/user";

type Props = {
  onSubmit: (post: Post) => void;
};

export const PostForm: React.FC<Props> = ({ onSubmit }) => {
  const [userId, setUserId] = useState(0);
  const [hasUserIdError, setHasUserIdError] = useState(false);

  const [title, setTitle] = useState("");
  const [hasTitleError, setHasTitleError] = useState(false);

  const [textArea, setTextArea] = useState("");
  const [hasAreaErrorMessage, setHasAreaErrorMessage] = useState("");

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    setHasTitleError(false);
  };

  const handleAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextArea(event.target.value);
    setHasAreaErrorMessage("");
  };

  const handleUserIdChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setUserId(+event.target.value);
    setHasUserIdError(false);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    setHasTitleError(!title);
    setHasUserIdError(!userId);

    if (!textArea) {
      setHasAreaErrorMessage("Please enter some text");
    } else if (textArea.length < 5) {
      setHasAreaErrorMessage("Please enter more 5 letters");
      return;
    }

    if (!title || !userId || textArea.length < 5) {
      return;
    }

    onSubmit({
      id: 0,
      userId,
      title,
      body: textArea,
      user: getUserById(userId),
    });

    reset();
  };

  const reset = () => {
    setTitle("");
    setUserId(0);
    setTextArea("");

    setHasAreaErrorMessage("");
    setHasTitleError(false);
    setHasUserIdError(false);
  };

  return (
    <form
      action="/api/posts"
      method="POST"
      style={{ display: "flex", flexDirection: "column" }}
      className="box"
      onSubmit={handleSubmit}
    >
      <div className="field">
        <label className="label" htmlFor="post-title">
          Title
        </label>
        <div
          className={classNames("control", {
            "has-icons-right": hasTitleError,
          })}
        >
          <input
            id="post-title"
            className={classNames("input", {
              "is-danger": hasTitleError,
            })}
            type="text"
            placeholder="Your title"
            value={title}
            onChange={(e) => handleTitleChange(e)}
            onBlur={() => {
              setHasTitleError(!title);
            }}
          />

          {hasTitleError && (
            <span className="icon is-small is-right">
              <i className="fas fa-exclamation-triangle has-text-danger"></i>
            </span>
          )}
        </div>

        {hasTitleError && (
          <p className="help is-danger">This email is invalid</p>
        )}
      </div>

      <div className="field">
        <label className="label" htmlFor="select">
          Subject
        </label>
        <div className="control has-icons-left">
          <div
            className={classNames("select", {
              "is-danger": hasUserIdError,
            })}
          >
            <select onChange={handleUserIdChange} value={userId} id="select">
              <option value="0">Select dropdown</option>
              {usersFromServer.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
              <option value="1">Рудут</option>
              <option value="2">Манивеар</option>
            </select>
          </div>
          <span className="icon is-small is-left">
            <i className="fas fa-user"></i>
          </span>
        </div>
        {hasUserIdError && (
          <p className="help is-danfer">Plase select a user</p>
        )}
      </div>

      <div className="field">
        <label className="label" htmlFor="textarea">
          Message
        </label>
        <div className="control">
          <textarea
            id="textarea"
            className={classNames("textarea", {
              "is-danger": hasAreaErrorMessage,
            })}
            placeholder="Textarea"
            value={textArea}
            onChange={handleAreaChange}
          ></textarea>
        </div>
        {hasAreaErrorMessage && (
          <p className="help is-danger">{hasAreaErrorMessage}</p>
        )}
      </div>

      <div className="buttons">
        <button type="submit" className="button is-primary">
          Submit
        </button>
        <button type="reset" className="button is-link" onClick={reset}>
          Cancel
        </button>
      </div>
    </form>
  );
};
