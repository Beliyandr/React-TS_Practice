import React, { useState } from "react";
import "bulma";
import "@fortawesome/fontawesome-free/css/all.css";

export const PostForm: React.FC = () => {
  const [title, setTitle] = useState("Post 1");
  const [isBodyShown, setIsBodyShown] = useState(true);
  const [userId, setUserId] = useState(0);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    // setIsBodyShown(false);
  };

  return (
    <form action="/api/posts" method="POST" className="form">
      {/* <label className="field">
        Title: &nbsp;&nbsp;
        <input
          type="text"
          //  value="Post 1"
          value={title}
          onChange={handleTitleChange}
        />
        {title}
      </label> */}
      <div className="field">
        <label className="label">Email</label>
        <div className="control has-icons-left has-icons-right">
          <input
            className="input is-danger"
            type="email"
            placeholder="Email input"
            value="hello@"
          />
          <span className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-exclamation-triangle"></i>
          </span>
        </div>
        <p className="help is-danger">This email is invalid</p>
      </div>

      {/* <div className="field">
        <label htmlFor="user-id">User: </label>

        <select
          id="user-id"
          required
          value={userId}
          onChange={(event) => setUserId(+event?.target.value)}
        >
          <option value="0" disabled>
            Please choose a user
          </option>
          <option value="1">Cle</option>
          <option value="2">Cement</option>
          <option value="3">purpt</option>
          <option value="4">Elvin</option>
          <option value="5">Pupkin</option>
          <option value="6">Chelsey</option>
        </select>
        {userId}
      </div> */}
      <div className="select is-info">
        <select>
          <option>Select dropdown</option>
          <option>With options</option>
        </select>
      </div>

      <label className="field">
        <input
          type="checkbox"
          checked={isBodyShown}
          onChange={(event) => setIsBodyShown(event.target.checked)}
        />
        I want to enter post text
      </label>
      {isBodyShown && (
        // <textarea
        //   className="field"
        //   value={title}
        //   onChange={(event) => setTitle(event.target.value)}
        // />

        <textarea
          className="textarea is-link"
          placeholder="Link textarea"
        ></textarea>
      )}
      {/*
      <button type="submit" className="button">
        Create
      </button> */}

      <div className="buttons">
        <button className="button is-info">Info</button>
        <button className="button is-success">Success</button>
      </div>
    </form>
  );
};
