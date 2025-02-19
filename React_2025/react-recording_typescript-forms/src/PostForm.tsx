import classNames from "classnames";
import React, { useState } from "react";

export const PostForm = () => {
  const [userId, setUserId] = useState(0);
  const [hasTitleError, setHasTitleError] = useState(false);

  const [title, setTitle] = useState("Post_1");
  const [isBodyShow, setIsBodyShow] = useState(false);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    setHasTitleError(false);
    setIsBodyShow(false);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!title) {
      setHasTitleError(true);
      return;
    }
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
            placeholder="Email input"
            value={title}
            onChange={(e) => handleTitleChange(e)}
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
        <label className="label">Subject</label>
        <div className="control has-icons-left">
          <div className="select">
            <select>
              <option>Select dropdown</option>
              <option>With options</option>
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
          <textarea className="textarea" placeholder="Textarea"></textarea>
        </div>
      </div>

      <div className="field">
        <div className="control">
          <label className="checkbox">
            <input type="checkbox" />I agree to the{" "}
            <a href="#">terms and conditions</a>
          </label>
        </div>
      </div>

      <div className="buttons">
        <button type="submit" className="button is-primary">
          Primary
        </button>
        <button type="reset" className="button is-link">
          Link
        </button>
      </div>
    </form>
  );
};
