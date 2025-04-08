import React, { useState } from "react";

export const BlogFilter = ({ setSearchParams, latest, postQuery }) => {
  const [search, setSearch] = useState(postQuery);
  const [checked, setChecked] = useState(latest);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const query = form.search.value;

    const isLatest = form.latest.checked;

    const params = {};

    if (query.length) {
      params.post = query;
    }
    if (isLatest) params.latest = true;

    setSearchParams(params);
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <input
        type="search"
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <input type="submit" value="Search" />
      <label style={{ padding: " 0 1rem", display: "block" }}>
        New only
        <input
          type="checkbox"
          name="latest"
          value={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
      </label>
    </form>
  );
};
