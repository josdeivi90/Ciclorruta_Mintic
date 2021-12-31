import React from "react";
import { Dropdown } from "react-bootstrap";

const SearchBar = () => {
  const redirectUrl  = "/search-results";

  const setSearchedDestiny = (selectedDestiny) => {
    localStorage.setItem("destiny", selectedDestiny);
  }

  return (
    <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        ¿A dónde <strong>quieres ir</strong>?
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href={redirectUrl} onClick={() => setSearchedDestiny("Teusaquillo")}>Teusaquillo</Dropdown.Item>
        <Dropdown.Item href={redirectUrl} onClick={() => setSearchedDestiny("Chapinero")}>Chapinero</Dropdown.Item>
        <Dropdown.Item href={redirectUrl} onClick={() => setSearchedDestiny("Bosa")}>Bosa</Dropdown.Item>
        <Dropdown.Item href={redirectUrl} onClick={() => setSearchedDestiny("Kennedy")}>Kennedy</Dropdown.Item>
        <Dropdown.Item href={redirectUrl} onClick={() => setSearchedDestiny("Otro")}>Otro</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default SearchBar;
