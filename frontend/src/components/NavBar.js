import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

const redirectUrl= "/"
const redirectUrl1= "/crearcuenta"

const NavBar = (props) => {
    return(
        <div>
      <Navbar bg="dark" variant="dark" expand="lg" position = "fixed">
        <Container > 
          <Navbar.Brand href="#home">CicloRutas Bogotá</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link href={redirectUrl}>Inicio</Nav.Link>
              <Nav.Link href="" >Iniciar sesion </Nav.Link>
              <Nav.Link href={redirectUrl1}>Crear cuenta</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        </div> 

              
    ) ;
};

export default NavBar;