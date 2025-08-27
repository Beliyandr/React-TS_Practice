import classNames from "classnames";
import React, { useState } from "react";

export const PostForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const [hasTitleError, setHasTitleError] = useState(false);

  const [userId, setUserId] = useState(0);
  const [hasUserIdError, setHasUserIdError] = useState(false);

  const [body, setBody] = useState("");
  const [hasBodyError, setHasBodyError] = useState(false);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    setHasTitleError(false);
  };

  const handleBodyChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBody(event.target.value);
    setHasBodyError(false);
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setUserId(+event.target.value);
    setHasUserIdError(false);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!title) {
      setHasTitleError(true);
    }
    if (!body) {
      setHasBodyError(true);
    }
    if (!userId) {
      setHasUserIdError(true);
    }
  };

  const handleReset = () => {
    setTitle("");
    setUserId(0);
    setBody("");
    setHasTitleError(false);
    setHasUserIdError(false);
    setHasBodyError(false);
  };

  return (
    <form
      action="/api/posts"
      method="POST"
      className="box"
      onSubmit={handleSubmit}
      onReset={handleReset}
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
            className={classNames("select", {
              "is-danger": hasUserIdError,
            })}
          >
            <select
              onChange={handleSelectChange}
              value={userId}
              id="post-user-id"
            >
              <option value="0" disabled>
                Select a user
              </option>
              <option value="Elena">Elena</option>
              <option value="Andrew">Andrew</option>
              <option value="Mikola">Mikola</option>
              <option value="Georg">Georg</option>
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
              "is-danger": hasBodyError,
            })}
            placeholder="Textarea"
            value={body}
            onChange={handleBodyChange}
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
