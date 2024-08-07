import React from "react";
import { IUser } from "../types/types";
import { UserItem } from "./UserItem";

interface UserListProps {
  users: IUser[];
}

export const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <div>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};
