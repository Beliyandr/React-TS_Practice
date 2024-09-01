import React, { useState } from "react";
import "bulma";
import "@fortawesome/fontawesome-free/css/all.css";
import classNames from "classnames";

export const PostForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const [hasTitleError, setHasTitleError] = useState(false);

  const [userId, setUserId] = useState(0);
  const [hasUserId, setHasUserId] = useState(false);

  const [body, setBody] = useState("");
  const [hasBodyError, setHasBodyError] = useState(false);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    setHasTitleError(false);
  };

  const handleUserIdChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setUserId(+event.target.value);
    setHasUserId(false);
  };

  const handleBodyChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBody(event.target.value);
    setHasBodyError(false);
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
      setHasBodyError(true);
    }

    if (!title || !body || !userId) {
      return;
    }
  };

  return (
    <form
      action="/api/posts"
      method="POST"
      className="form"
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
            className={classNames("input", { "is-danger": hasTitleError })}
            type="text"
            placeholder="Email input"
            id="post-title"
            value={title}
            onChange={handleTitleChange}
          />
          {hasTitleError && (
            <span className="icon is-small is-right">
              <i className="fas fa-exclamation-triangle has-text-danger"></i>
            </span>
          )}
        </div>
        {hasTitleError && (
          <p className="help is-danger">Please enter some title</p>
        )}
      </div>

      <div className="field">
        <label className="label" htmlFor="post-user-id">
          Subject
        </label>

        <div className="control has-icons-left">
          <div
            className={classNames(
              "select"
              //  { "is-danger": hasUserIdError }
            )}
          >
            <select
              id="post-user-id"
              value={userId}
              // onChange={handleUserIdChange}
            >
              <option value="0" disabled>
                Select a user
              </option>
            </select>
            <span className="icon is-small is-right">
              <i className="fas fa-user"></i>
            </span>
          </div>
        </div>
      </div>
      {/* <label className="field">
        <input
          type="checkbox"
          checked={isBodyShown}
          onChange={(event) => setIsBodyShown(event.target.checked)}
        />
        I want to enter post text
      </label> */}
      <div className="control">
        <textarea
          className={classNames("textarea is-link", {
            "is-danger": hasBodyError,
          })}
          placeholder="Add some text"
          value={body}
          onChange={handleBodyChange}
        ></textarea>
        {hasBodyError && (
          <p className="help is-danger">Please enter some message</p>
        )}
      </div>

      <div className="buttons">
        <button className="button is-info" type="submit">
          Submit
        </button>
        <button className="button is-success" type="reset">
          Cancel
        </button>
      </div>
    </form>
  );
};
