import classNames from "classnames";
import React, { useState } from "react";

import { Post } from "./types/Post";
import usersFromServer from "./api/users.json";
import { getUserById } from "./services/user";

type Props = {
  onSubmit: (post: Post) => void;
};

export const PostForm: React.FC<Props> = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [hasTitleError, setHasTitleError] = useState(false);

  const [userId, setUserId] = useState(0);
  const [hasUserIdError, setHasUserIdError] = useState(false);

  const [body, setBody] = useState("");
  const [bodyErrorMassage, setBodyErrorMassage] = useState("");

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    setHasTitleError(false);
  };

  const handleBodyChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBody(event.target.value);
    setBodyErrorMassage("");
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setUserId(+event.target.value);
    setHasUserIdError(false);
  };

  const reset = () => {
    setTitle("");
    setUserId(0);
    setBody("");

    setHasTitleError(false);
    setBodyErrorMassage("");
    setHasUserIdError(false);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    setHasTitleError(!title);
    setHasUserIdError(!userId);

    if (!body) {
      setBodyErrorMassage("Please enter some message");
    } else if (body.length < 5) {
      setBodyErrorMassage("Message must be at least 5 characters long");
    }

    if (!title || body.length < 5 || !userId) {
      return;
    }

    onSubmit({
      id: 0,
      title,
      body,
      userId,
      user: getUserById(userId),
    });

    reset();
  };

  return (
    <form
      action="/api/posts"
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
            className={classNames("input", {
              "is-danger": hasTitleError,
            })}
            type="text"
            placeholder="Email input"
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
            className={classNames("select", {
              "is-danger": hasUserIdError,
            })}
          >
            <select
              onChange={handleSelectChange}
              value={userId}
              id="post-user-id"
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
      </div>

      <div className="field">
        <label className="label">Message</label>
        <div className="control">
          <textarea
            className={classNames("textarea", {
              "is-danger": bodyErrorMassage,
            })}
            placeholder="Textarea"
            value={body}
            onChange={handleBodyChange}
          ></textarea>
        </div>
        {bodyErrorMassage && (
          <p className="help is-danger">{bodyErrorMassage}</p>
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
