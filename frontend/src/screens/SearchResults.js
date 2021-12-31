import React from "react";

const SearchResults = () => {
  const destiny = localStorage.getItem("destiny");


  return <h1>SearchResults: {destiny}</h1>;
};

export default SearchResults;
