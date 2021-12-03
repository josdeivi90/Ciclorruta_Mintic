import React from 'react';
import "./LandingImage.css";
import { Stack , Button} from 'react-bootstrap';
import Bikers from "../assets/img/Bikers.mp4";

const redirectUrl = "/home";

const LandingImage = () => {
    return (
        <div className= "bike-container">
            <video className= "video" src= {Bikers} autoPlay loop muted />
            <Stack gap={2} className= "align-items-center" className= "bike-container">
                <h1>Encuentra las mejores CicloRutas en tu ciudad</h1> 
                <Button variant="secondary"size="lg" href="/home"onClick={redirectUrl} >Ingresar</Button>{' '} 
            </Stack>
        </div>
    )
}

export default LandingImage

