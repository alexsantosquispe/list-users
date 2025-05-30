import { lazy, Suspense } from "react";
import { UserList } from "./components/UsersList";
import { SearchUser } from "./components/SearchUser";
import { useUsersList } from "./hooks/useUsersList";

const UserDetailLazy = lazy(() => import("./components/UserDetail"));

function App() {
  const { users, selectedUser, setSelectedUser, setFilterByName } =
    useUsersList();

  return (
    <div className="main-container">
      <h1>Tabla de Usuarios</h1>
      <SearchUser onSearch={setFilterByName} />

      <div className="master-detail-wrapper">
        <UserList
          users={users}
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
