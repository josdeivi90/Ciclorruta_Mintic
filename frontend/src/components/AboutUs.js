import React from 'react'; 
import "./AboutUs.css";
import tunel from "../assets/img/tunel.jpg"; 
import { Stack } from 'react-bootstrap';

const AboutUs = () => {
    return (
        <div className="about-container">
            <Stack direction="horizontal" gap={3}>
  <div className="">
            <h1>¿Quiénes somos?</h1> 
             <p >Que mejor que la experiencia de un compañero ciclista para encontrar 
                 la mejor ruta para la seguridad y goce de todos nuestros miembros. 
                 Eso somos, un grupo unido de ciclistas en busca de una ruta segura.</p>
  </div>
  <div className="bg-dark border ms-auto">
        <img src = {tunel} alt="about" />
  </div>
</Stack>
            
             </div>
        
    )
}

export default AboutUs
