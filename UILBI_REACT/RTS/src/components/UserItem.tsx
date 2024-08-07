import React from "react";
import { IUser } from "../types/types";

interface UsesrItemProps {
  user: IUser;
}

export const UserItem: React.FC<UsesrItemProps> = ({ user }) => {
  return (
    <div  style={{ padding: "15px", border: "1px solid black" }}>
      {user.id}.{user.name} проживает в городе {user.address.city} на такой то
      улице {user.address.street}
    </div>
  );
};
