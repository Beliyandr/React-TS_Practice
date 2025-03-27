import { User } from "../types";
import { getData } from "../utils/httpClients";

export function getUsers(): Promise<User[]> {
  return getData<User[]>("/users").then((users) => users.slice(0, 3));
}
