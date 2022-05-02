import React from "react";
import { Route, Routes } from "react-router-dom";
import DogList from "./DogList";
// import DogDetails from "./DogDetails";

function RoutesList({ dogs }) {
  return (
    <Routes>
      <Route element={<DogList dogs={dogs} />} path="/dogs" />
      <Route element={<DogList dogs={dogs} />} path="/*" />
      {/* <Route element={<DogDetails />} path="/dogs/:name" /> */}
    </Routes>
  );
}

export default RoutesList;
