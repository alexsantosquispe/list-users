import { useEffect, useMemo, useState } from "react";
import type { User } from "../types";

export const useUsersList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [filterByName, setFilterByName] = useState<string>("");

  const filteredUsers = useMemo(() => {
    if (!filterByName) return users;
    return users.filter((user) =>
      user.name.toLocaleLowerCase().includes(filterByName)
    );
  }, [filterByName, users]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);

  return {
    users: filteredUsers,
    selectedUser,
    setSelectedUser,
    setFilterByName
  };
};
