import React from "react";


const NavBar = (props) => {
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
}

export default NavBar;