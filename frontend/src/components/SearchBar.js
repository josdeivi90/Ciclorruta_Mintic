import React from "react";
import { Dropdown } from "react-bootstrap";

const SearchBar = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        ¿Qué ruta <strong>deseas</strong>?
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Septimazo</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Avenida Boyaca</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Ruta 127</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Ruta 116</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default SearchBar;
