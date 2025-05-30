import { useEffect, useState, lazy, Suspense, useMemo } from "react";
import type { User } from "./types";
import { UserList } from "./components/UsersList";
import { SearchUser } from "./components/SearchUser";

const UserDetailLazy = lazy(() => import("./components/UserDetail"));

function App() {
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

  return (
    <div className="main-container">
      <h1>Tabla de Usuarios</h1>
      <SearchUser onSearch={setFilterByName} />

      <div className="master-detail-wrapper">
        <UserList
          users={filteredUsers}
          selectedUserId={selectedUser?.id}
          onSelectUser={setSelectedUser}
        />

        <div className="detail-wrapper">
          <Suspense>
            <UserDetailLazy user={selectedUser} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default App;
