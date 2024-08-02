import React, { useState } from "react";
import classNames from "classnames";
import usersFromServer from "../api/users.json";
import { User } from "../types/User";
import { Post } from "../types/Post";

import { getUserById } from "../services/user";

type Props = {
  onSubmit: (post: Post) => void;
};

export const PostForm: React.FC<Props> = ({ onSubmit }) => {
  const [userId, setUserId] = useState(0);
  const [hasUserIdError, setHasUserIdError] = useState(false);

  const [title, setTitle] = useState("");
  const [hasTitleError, setHasTitleError] = useState(false);

  const [message, setMessage] = useState("");
  const [hasMessageError, setHasMessageError] = useState("");

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    setHasTitleError(false);
  };

  const handleMessageChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setMessage(event.target.value);
    setHasMessageError("");
  };

  const handleUserIdChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setUserId(+event.target.value);
    setHasUserIdError(false);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    setHasTitleError(!title);
    setHasUserIdError(!userId);

    if (!message) {
      setHasMessageError("Please enter some text");
    } else if (message.length < 5) {
      setHasMessageError("Message should have at least 5 chars");
    }

    if (!title || !userId || message.length < 5) {
      return;
    }

    console.log(title);
    console.log(message);
    console.log(userId);

    onSubmit({
      id: 0,
      title,
      body: message,
      userId,
      user: getUserById(userId),
    });

    reset();
  };

  const reset = () => {
    setTitle("");
    setMessage("");
    setUserId(0);

    setHasTitleError(false);
    setHasUserIdError(false);
    setHasMessageError("");
  };

  return (
    <form
      action="api/posts"
      method="POST"
      className="box"
      onSubmit={handleSubmit}
      onReset={reset}
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
            className={classNames("input", { "is-danger": hasTitleError })}
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={handleTitleChange}
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
        {hasTitleError && <p className="help is-danger">Title is required</p>}
      </div>

      <div className="field">
        <label className="label" htmlFor="post-user-id">
          Subject
        </label>
        <div className="control has-icons-left">
          <div
            className={classNames("select", { "is-danger": hasUserIdError })}
          >
            <select
              id="post-user-id"
              value={userId}
              onChange={handleUserIdChange}
            >
              <option value="0">Select a user</option>

              {usersFromServer.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
            </select>
          </div>
          <span className="icon is-small is-left">
            <i className="fas fa-user"></i>
          </span>
        </div>
        {hasUserIdError && (
          <p className="help is-danger">Please select a userd</p>
        )}
      </div>

      <div className="field">
        <label className="label" htmlFor="message-post">
          Message
        </label>
        <div className="control">
          <textarea
            id="message-post"
            className={classNames("textarea", { "is-danger": hasMessageError })}
            placeholder="Add some text here"
            value={message}
            onChange={handleMessageChange}
          ></textarea>
        </div>
        {hasMessageError && <p className="help is-danger">{hasMessageError}</p>}
      </div>

      <div className="buttons">
        <button type="submit" className="button is-success ">
          Submit
        </button>
        <button type="reset" className="button is-link is-light">
          Cancel
        </button>
      </div>
    </form>
  );
};
