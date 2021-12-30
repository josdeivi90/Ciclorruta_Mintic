import React from "react";
import {Carousel} from "react-bootstrap";
import Carousel1 from "../assets/img/Carousel1.jpg";
import Carousel2 from "../assets/img/Carousel2.jpg";
import Carousel3 from "../assets/img/Carousel3.jpg";
import SignInButton from "./SignInButton";

const LandingImages = () => {
    const carCaption = (
        <>
        <h1>Cicloruta</h1>
        <h3>Elige la mejor ruta</h3>
        <SignInButton/>
        </>
    );

  return (<Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={Carousel1}
        alt="First slide"
      />
      <Carousel.Caption style={{backgroundColor: "rgba(0,0,0,0.5)"}}>
        {carCaption}
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={Carousel2}
        alt="Second slide"
      />
  
      <Carousel.Caption style={{backgroundColor: "rgba(0,0,0,0.5)"}}>
      {carCaption}
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={Carousel3}
        alt="Third slide"
      />
  
      <Carousel.Caption style={{backgroundColor: "rgba(0,0,0,0.5)"}}>
      {carCaption}
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>);
};

export default LandingImages;