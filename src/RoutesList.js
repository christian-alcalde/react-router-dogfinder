import React from "react";
import { Route } from "react-router-dom";
import DogList from "./DogList";
// import DogDetails from "./DogDetails";

function RoutesList({ dogs }) {
  return (
    <div>
      <Route element={<DogList dogs={dogs} />} path="/dogs" />
      <Route element={<DogList dogs={dogs} />} path="/*" />
      {/* <Route element={<DogDetails />} path="/dogs/:name" /> */}
    </div>
  );
}

export default RoutesList;
