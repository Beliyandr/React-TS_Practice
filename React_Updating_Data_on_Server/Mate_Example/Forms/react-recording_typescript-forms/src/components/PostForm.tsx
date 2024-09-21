import classNames from "classnames";
import React, { useState } from "react";
import usersFromServer from "../api/users.json";
import { Post } from "../types/Post";
import { getUserById } from "../services/user";

type Props = {
  onSubmit: (post: Post) => void;
};

export const PostForm: React.FC<Props> = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [hasTitleError, setHasTitleError] = useState(false);

  const [body, setBody] = useState("");
  const [hasBodyError, setHasBodyError] = useState(false);

  const [userId, setUserId] = useState(0);
  const [hasUserIdError, setHasUserIdError] = useState(false);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    setHasTitleError(false);
  };

  const handleBodyChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBody(event.target.value);
    setHasBodyError(false);
  };

  const handleUserIdChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setUserId(+event.target.value);
    setHasUserIdError(false);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    setHasTitleError(!title);
    setHasUserIdError(!userId);
    setHasBodyError(!body);

    if (!title || !userId || !body) {
      return;
    }

    onSubmit({
      id: 0,
      title,
      body,
      userId,
      user:getUserById(userId)
    });
  };

  return (
    <form
      action="/api/posts"
      method="POST"
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
            placeholder="Email input"
            value={title}
            onChange={handleTitleChange}
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
              <option value="0" disabled>
                Select a user
              </option>
              {usersFromServer.map((user) => {
                return (
                  <option key={user.id} value={user.id}>
                    {user.name}
                  </option>
                );
              })}
            </select>
          </div>
          <span className="icon is-small is-left">
            <i className="fas fa-user"></i>
          </span>
        </div>
        {hasUserIdError && (
          <p className="help is-danger">Please select a user</p>
        )}
      </div>

      <div className="field">
        <label className="label" htmlFor="select-user">
          Message
        </label>
        <div
          className={classNames("control", {
            "is-danger": hasBodyError,
          })}
        >
          <textarea
            id="select-user"
            onChange={handleBodyChange}
            value={body}
            className="textarea"
            placeholder="Textarea"
          ></textarea>
        </div>
        {hasBodyError && (
          <p className="help is-danger">Please enter some message</p>
        )}
      </div>

      <div className="buttons">
        <button type="submit" className="button is-link">
          Submit
        </button>

        <button type="reset" className="button is-link is-light">
          Cancel
        </button>
      </div>
    </form>
  );
};
