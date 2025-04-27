import { useSearchParams } from "react-router-dom";
import classNames from "classnames";
import React, { useState } from "react";
import { useUsers } from "../store/UsersContext";
import { get } from "http";

type Param = string | number;
type Params = {
  [key: string]: Param | Param[] | null;
};

function getSearchWith(params: Params, search?: string | URLSearchParams) {
  const newParams = new URLSearchParams(search);

  for (const [key, value] of Object.entries(params)) {
    if (value === null) {
      newParams.delete(key);
    } else if (Array.isArray(value)) {
      newParams.delete(key);
      value.forEach((item) => newParams.append(key, item.toString()));
    } else {
      newParams.set(key, value.toString());
    }
  }

  return newParams.toString();
}

export const PostFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const users = useUsers();
  const userId = +(searchParams.get("userId") || 0);
  const query = searchParams.get("query") || "";

  // const [userId, setUserId] = useState(0);
  const letters = searchParams.getAll("letters") || [];
  // const [letters, setLetters] = useState<string[]>([]);

  function setSearchWith(params: any) {
    const search = getSearchWith(params, searchParams);
    setSearchParams(search);
  }

  function handlePageChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setSearchWith({ userId: +event.target.value || null });
  }

  function handleQueryChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchWith({ query: event.target.value || null });
  }
  function toggleLetter(ch: string) {
    const newLetters = letters.includes(ch)
      ? letters.filter((letter) => letter !== ch)
      : [...letters, ch];
    setSearchWith({ letters: newLetters });
  }

  function clearLetters() {
    setSearchWith({ letters: null });
  }

  // function handlePageChange(event: React.ChangeEvent<HTMLSelectElement>) {
  //   // setUserId(+event.target.value);
  //   const params = new URLSearchParams(searchParams);
  //   params.set("userId", event.target.value);
  //   setSearchParams(params);
  // }

  // function handleQueryChange(event: React.ChangeEvent<HTMLInputElement>) {
  //   const params = new URLSearchParams(searchParams);
  //   params.set("query", event.target.value);
  //   setSearchParams(params);
  // }

  // function toggleLetter(ch: string) {
  //   const params = new URLSearchParams(searchParams);
  //   const newLetters = letters.includes(ch)
  //     ? letters.filter((letter) => letter !== ch)
  //     : [...letters, ch];
  //   params.delete("letters");
  //   newLetters.forEach((letter) => params.append("letters", letter));
  //   setSearchParams(params);
  // }

  // function clearLetters() {
  //   const params = new URLSearchParams(searchParams);
  //   params.delete("lettes");
  //   setSearchParams(params);
  // }

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
