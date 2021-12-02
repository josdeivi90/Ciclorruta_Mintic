import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

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

    const rutas = props.rutas
    
  return (
    <LoadScript googleMapsApiKey="AIzaSyCiRyZ6PusAGZCx9zTfhmNrc3g-dyR7VpU">
        <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
        >
            { /* Child components, such as markers, info windows, etc. */ }
            {
                rutas.map(coordenada => 
                    <Marker
                        position={{ lat: coordenada.latitud, lng: coordenada.longitud }}
                        label = "descripcion prueba"
                    />
                )
            }
        </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map)