import React from "react";
import Map from "../components/Maps"

import UserHome from "../components/UserHome";
import SearchBar from "../components/SearchBar";

const Home = () => { 
  const nombreRuta = localStorage.getItem("road")
  return (
    <div> <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}> 
    <UserHome/>
    <SearchBar/>
     </div>
      <Map rutas={nombreRuta}
      />
    </div>
  );
};

export default Home;
