import React, { useState } from "react";

export const Form: React.FC = () => {
  const [userId, setUserId] = useState(0);
  const [title, setTitle] = useState("Post_1");
  const [isBodyShow, setIsBodyShow] = useState(false);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    setIsBodyShow(false);
  };

  return (
    <form action="/api/posts" method="POST" className="box">
      <label className="field">
        Title:&nbsp;&nbsp;
        <input type="text" value={title} onChange={handleTitleChange} />
      </label>

      <div className="field">
        <label htmlFor="user-id">User: </label>
        <select
          id="user-id"
          required
          value={userId}
          onChange={(e) => {
            setUserId(+e.target.value);
          }}
        >
          <option value="0" disabled>
            Please choose a user
          </option>
          <option value="1">Leanne Graham</option>
          <option value="2">Ervin Howell</option>
          <option value="3">Clementine Bauch</option>
          <option value="4">Patricia Lebsack</option>
          <option value="5">Chelsey Dietrich</option>
        </select>
      </div>

      <label className="field">
        <input
          type="checkbox"
          checked={isBodyShow}
          onChange={(e) => setIsBodyShow(e.target.checked)}
        />
        I want to enter post text
      </label>
      <textarea
        className="field"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <button type="submit">Create</button>
    </form>
  );
};
