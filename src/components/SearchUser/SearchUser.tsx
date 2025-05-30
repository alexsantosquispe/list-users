import { type ChangeEvent } from "react";
import "./SearchUser.css";

export const SearchUser = ({
  onSearch
}: {
  onSearch: (value: string) => void;
}) => {
  const searchHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    onSearch(value.trim().toLowerCase());
  };

  return (
    <div className="wrapper">
      <label htmlFor="search-user">Buscar usuario por nombre</label>
      <input
        id="search-user"
        type="search"
        placeholder="Ingresar un nombre"
        onChange={searchHandler}
      />
    </div>
  );
};
