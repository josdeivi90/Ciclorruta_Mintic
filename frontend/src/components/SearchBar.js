import React from "react";
import { Dropdown } from "react-bootstrap";

const divStyle = {
  width: '30%',
  height: '40%',
};
const other = {
  textAlign: "left",
  marginBottom: "1%",
  display: "flex",
  flexBasis: "830px",
  /*flexGrow: "0 0 6000%",
  flexShrink: 1,*/
};

const SearchBar = () => {
  const redirectUrl = "/home";
  const setSearch = (roadSelected) => {
    localStorage.setItem("road", roadSelected);
  }
  return (
    <Dropdown style={other} >
      <Dropdown.Toggle variant="secondary" id="dropdown-basic" style={divStyle}>
        ¿Qué ruta <strong>deseas</strong>?
      </Dropdown.Toggle >

      <Dropdown.Menu >
        <Dropdown.Item
          href={redirectUrl} 
          onClick={() => setSearch("Av_boyaca")}>
          Avenida Boyaca
        </Dropdown.Item>
        <Dropdown.Item href="#/action-2">Septimazo</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Ruta 127</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Ruta 116</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default SearchBar;