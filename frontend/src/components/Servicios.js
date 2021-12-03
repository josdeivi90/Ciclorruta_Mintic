import React from 'react'
import { Carousel } from 'react-bootstrap'
import bici1 from "../assets/img/bici1.jpg";
import Mujeres from "../assets/img/Mujeres.jpg";
import madre from "../assets/img/madre.jpg";


const dimension={
    display: "flex",
    backgroundColor: "black", 
    height: "70vh", 
    padding: "10px 0 10px 0", 

  } 

const letra= {
    display: "flex",
    backgroundColor: "gray", 
    color: "white", 
    flexDirection: "column",
    alignItems: "center",
}

const Servicios = () => {
    return (
        <div >
            <div style={letra}> 
                <h1>Servicios</h1> 
            </div>
           
        <Carousel style={dimension}>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={Mujeres }
            alt="First slide"
            
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={900}>
          <img
            className="d-block w-100"
            src={bici1}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={madre}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
    )
}

export default Servicios
