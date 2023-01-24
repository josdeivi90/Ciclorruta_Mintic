import React from "react";
import { Container, Row, Col, Stack, Image } from "react-bootstrap";
import Logo from "../assets/img/Logo.png";

const imageStyle={
  marginTop: "20px",
  width: "100px", 
  height: "90px",
}
const lessContainer={
  width: "0.3%", 
  display: "flex",
  //flexGrow: "1",
  padding: 0,
  marginLeft: "60px",
  flexBasis: "1px",
  //flexShrink: 3,
}
const UserHome = () => {
  return (
    <Container style={lessContainer}>
      <Row>
        <Col>
          <Stack gap={2} className="align-items-left">
            <Image src={Logo}  style={imageStyle}/>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
};

export default UserHome;
