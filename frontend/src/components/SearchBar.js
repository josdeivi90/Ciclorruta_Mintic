import React from "react";
import { Dropdown } from "react-bootstrap";

const SearchBar = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        ¿A dónde <strong>quieres ir</strong>?
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Teusaquillo</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Chapinero</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Bosa</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Kennedy</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Otro</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default SearchBar;
