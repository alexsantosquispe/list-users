import type { User } from "../../types";
import "./UserDetail.css";

interface UserDetailProps {
  user: User | null;
}

const UserDetail = ({ user }: UserDetailProps) => {
  if (!user)
    return (
      <div className="empty">No se ha seleccionado ningún usuario aún.</div>
    );

  return (
    <div className="user-detail">
      <h2>Detalle de Usuario</h2>
      <div className="user-info-container">
        <strong>Nombre:</strong>
        <span>{user.name}</span>
        <strong>Correo:</strong>
        <span>{user.email}</span>
        <strong>Dirección:</strong>
        <span>{`${user.address.street}${user.address.suite}, ${user.address.city}`}</span>
        <strong>Teléfono:</strong>
        <span>{user.phone}</span>
        <strong>Empresa:</strong>
        <span>{user.company.name}</span>
      </div>
    </div>
  );
};
export default UserDetail;
