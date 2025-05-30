export const UserItem = () => {
  return (
    <div className="userItem" key={user.id} onClick={() => selectUser(user)}>
      <p>{user.name}</p>
    </div>
  );
};
