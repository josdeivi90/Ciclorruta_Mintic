import React, {useState, useEffect} from 'react'
import { GoogleMap, LoadScript, /*Marker */} from '@react-google-maps/api';
import { buscarruta } from "../apis/crud"

const containerStyle = {
  width: '1000px',
  height: '400px',
  margin: "auto",
};

const center = {
  lat: 4.710989,
  lng: -74.072090
};

function Map(props) {

    const [rutas, setRutas] = useState([]);

    useEffect(() => {
      buscarruta (props.rutas, setRutas)
      console.log(rutas)
    }, []);
  
  return (
    <LoadScript googleMapsApiKey="AIzaSyCiRyZ6PusAGZCx9zTfhmNrc3g-dyR7VpU">
        <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
        >
           { /* Child components, such as markers, info windows, etc. */ }
           { /* {console.log(rutas)}
            {
                rutas.map(coordenada =>
                    <Marker
                        position={{ lat: coordenada._latitude, lng: coordenada._longitude }}
                        label = "descripcion prueba"
                    >
                      {console.log( coordenada)}
                    </Marker>
                )
            }*/}
        </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map)