import type { User } from "../types";

interface UserListProps {
  users: User[];
  selectedUserId?: number;
  onSelectUser: (user: User) => void;
}

export const UserList = ({
  users,
  selectedUserId,
  onSelectUser
}: UserListProps) => {
  if (!users.length)
    return <div className="users-list empty">No hay usuarios.</div>;

  return (
    <div className="users-list">
      {!!users.length &&
        users.map((user) => {
          const isSelected = user.id === selectedUserId;
          return (
            <div
              key={user.id}
              className={`user-item ${isSelected ? "user-item-selected" : ""}`}
              onClick={() => onSelectUser(user)}
            >
              <h2>{user.name}</h2>
              <span>{user.email}</span>
            </div>
          );
        })}
    </div>
  );
};
