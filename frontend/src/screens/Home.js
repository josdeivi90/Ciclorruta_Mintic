import React from "react";
import { Navigate } from "react-router-dom";

import UserHome from "../components/UserHome";

const Home = () => {
  var user = JSON.parse(localStorage.getItem("user"));

  if (user !== null){
  return (
      <div>
        <UserHome />
      </div>
    );
  }

  return (
    <div>
      <Navigate to='/' />
    </div>
  );

};

export default Home;
