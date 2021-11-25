import React from "react";

/*const NavBar = (props) => {
    return(
        <div style={styles}>
            <h2>Holaaa!!</h2>
            <h3>Nombre: {props.nombre}</h3>
            <h3>Apellido: {props.apellido}</h3>
        </div>
        
    )
}
const styles = {
    color : "red",
    fontFamily : "Arial",
    fontSize : "30px"
}*/

//https://react-bootstrap.github.io/components/navbar/
//https://getbootstrap.com/docs/4.0/components/navbar/

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

const NavBar = (props) => {
    return(
        <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">CicloRutas Bogotá</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link href="#home">Inicio</Nav.Link>
              <Nav.Link href="#link">Perfil</Nav.Link>
              <Nav.Link href="#link">Salir</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        </div>       
    )  
}

export default NavBar;