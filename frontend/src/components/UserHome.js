import React from "react";
import { Container, Row, Col, Stack, Image } from "react-bootstrap";
import Logo from "../assets/img/Logo.png";

import SearchBar from "./SearchBar";

const UserHome = () => {
  var user = JSON.parse(localStorage.getItem("user"));
  
  return (
    <Container>
      <Row>
        <Col>
          <Stack gap={2} className="align-items-center">
            <Image src={Logo} width="300px" height="280px" />
            <SearchBar />
            <h1>Bienvenido {user.email}</h1>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
};

export default UserHome;
