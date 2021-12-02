import React from "react";
import Map from "../components/Maps"

import UserHome from "../components/UserHome";
import SearchBar from "../components/SearchBar";

const Home = () => { 
  return (
    <div> <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}> 
    <UserHome/>
    <SearchBar/>
     </div>
      <Map rutas={
        [
          {latitud: 4.76072311639374, longitud: -74.06607043811893},
          {latitud: 4.696023214697453, longitud: -74.08711068316238},
          {latitud: 4.732946415956853, longitud: -74.06716743183685},
          {latitud: 4.666634117533645, longitud: -74.11157911404644}
        ]
      }
      />
    </div>
  );
};

export default Home;
