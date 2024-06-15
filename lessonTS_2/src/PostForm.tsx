import React from "react";

export const PostForm: React.FC = () => {
  return (
    <form action="/api/posts" method="POST" className="form">
      <label className="field">
        Title: &nbsp;&nbsp;
        <input type="text" value="Post 1" />
      </label>

      <div className="field">
        <label htmlFor="user-id">User: </label>

        <select id="user-id" required>
          <option value="1">Cle</option>
          <option value="2" selected>
            Cement
          </option>
          <option value="3">purpt</option>
          <option value="4">Elvin</option>
          <option value="5">Pupkin</option>
          <option value="6">Chelsey</option>
        </select>
      </div>

      <label className="field">
        <input type="checkbox" checked />I want to enter post text
      </label>

      <textarea className="field">Post body</textarea>

      <button type="submit" className="button">Create</button>
    </form>
  );
};
