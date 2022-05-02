import React from "react";
// import { Route } from "react-router-dom";

function DogList({ dogs }) {
  function renderDogs() {
    console.log(dogs);
    return dogs.map((dog) => <div>{dog}</div>);
  }

  return <div>{renderDogs()}</div>;
}

export default DogList;
