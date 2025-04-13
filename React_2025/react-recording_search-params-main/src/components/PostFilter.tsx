import classNames from "classnames";
import React, { useState } from "react";
import { useUsers } from "../store/UsersContext";
import { useSearchParams } from "react-router-dom";

export const PostFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const users = useUsers();

  // const [query, setQuery] = useState("");
  const query = searchParams.get("query") || "";

  // const [userId, setUserId] = useState(0);
  const userId = +(searchParams.get("userId") || 0);

  const letters = searchParams.getAll("letters") || [];
  // const [letters, setLetters] = useState<string[]>([]);

  function handlePageChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const params = new URLSearchParams(searchParams);
    params.set("userId", event.target.value);
    setSearchParams(params);
  }

  function handleQueryChange(event: React.ChangeEvent<HTMLInputElement>) {
    const params = new URLSearchParams(searchParams);
    params.set("query", event.target.value);
    setSearchParams(params);
  }

  function toggleLetter(ch: string) {
    const params = new URLSearchParams(searchParams);
    const newLetter = letters.includes(ch)
      ? letters.filter((letter) => letter !== ch)
      : [...letters, ch];

    params.delete("letters");

    newLetter.forEach((letter) => params.append("letters", letter));

    setSearchParams(params);

    // setLetters((currentLetters) =>
    //   currentLetters.includes(ch)
    //     ? currentLetters.filter((letter) => letter !== ch)
    //     : [...currentLetters, ch]
    // );
  }

  function clearLetters() {
    const params = new URLSearchParams(searchParams);
    params.delete("letters");
    setSearchParams(params);
  }

  return (
    <div className="block">
      <div className="field is-grouped">
        <div className="select">
          <select value={userId} onChange={handlePageChange}>
            <option value="0">All users</option>

            {users.map((user) => (
              <option value={user.id} key={user.id}>
                {user.name}
              </option>
            ))}
          </select>
        </div>

        <input
          type="search"
          className="input"
          placeholder="Search by title"
          value={query}
          onChange={handleQueryChange}
        />
      </div>

      <div className="buttons">
        {"aeoui".split("").map((letter) => (
          <button
            key={letter}
            onClick={() => toggleLetter(letter)}
            className={classNames("button", {
              "is-info": letters.includes(letter),
            })}
          >
            {letter}
          </button>
        ))}

        <button
          onClick={clearLetters}
          className="button"
          disabled={letters.length === 0}
        >
          Clear
        </button>
      </div>
    </div>
  );
};
