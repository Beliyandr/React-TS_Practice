import React, { useEffect, useState } from "react";

import { UsersList } from "./components/UserList";
import { User } from "./types";
import { getUsers } from "./services/user";
import { Loader } from "./components/Loader";
import { UserPosts } from "./components/UserPosts";

export const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User>();

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [updatedAt, setUpdatedAt] = useState(new Date());

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      getUsers()
        .then(setUsers)
        .catch((error) => {
          setErrorMessage("Try again later");
        })
        .finally(() => {
          setLoading(false);
        });
    }, 1000);
  }, [updatedAt]);

  function reload() {
    setUpdatedAt(new Date());
    setErrorMessage("");
  }

  return (
    <div className="section py-5">
      <div className="box">
        <div className="title">Users</div>

        {loading && <Loader />}

        {!loading && users.length > 0 && (
          <UsersList
            users={users}
            selectedUserId={selectedUser?.id}
            onSelect={setSelectedUser}
          />
        )}

        {!loading && !errorMessage && users.length === 0 && (
          <p className="title is-5">There are no users</p>
        )}

        {errorMessage && (
          <p className="notification is-danger">
            Try again later
            <button onClick={reload}>reload</button>
          </p>
        )}

        {selectedUser && <UserPosts userId={selectedUser.id} />}
      </div>
    </div>
  );
};
