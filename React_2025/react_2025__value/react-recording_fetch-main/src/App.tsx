import React, { useEffect, useState } from "react";

import usersFromServer from "./api/users.json";

import { Loader } from "./components/Loader";
import { UsersList } from "./components/UserList";
import { User } from "./types";
import { getUsers } from "./services/user";
import { UserPosts } from "./components/UserPosts";

export const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [errorMassage, setErrorMassage] = useState("");
  const [updateAt, setUpdateAt] = useState(new Date());
  const [selectedUserId, setSelectedUserId] = useState<number>(0);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      getUsers()
        .then(setUsers)
        .catch(() => setErrorMassage("Try again later"))
        .finally(() => setLoading(false));
    }, 1000);
  }, [updateAt]);

  function reload() {
    setUpdateAt(new Date());
    setErrorMassage("");
  }

  function handleSelectUser(user: User | null) {
    setSelectedUserId(user ? user.id : 0);
    console.log(user);
  }

  return (
    <div className="section py-5">
      <div className="box">
        <div className="title">Users</div>

        {loading && <Loader />}

        {!loading && !errorMassage && users.length > 0 && (
          <UsersList users={users} onSelect={handleSelectUser} />
        )}

        {!loading && users.length === 0 && (
          <p className="title is-5">There are no users</p>
        )}

        {errorMassage && (
          <p className="notification is-danger">
            {errorMassage}
            <button onClick={reload}>Reload</button>
          </p>
        )}
      </div>

      <UserPosts userId={selectedUserId} />
    </div>
  );
};
