import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Menu = (props) => {
    return(
        <div>
            <h3>Cedula: {props.cedula}</h3>
            <h3>Correo: {props.correo}</h3>
            <h3>Celular: {props.celular}</h3>

            <Button>Soy un botón bootstrap</Button>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
        
    )
}

export default Menu;