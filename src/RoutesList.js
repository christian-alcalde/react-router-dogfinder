import React from "react";
import { Route, Routes } from "react-router-dom";
import DogList from "./DogList";
import DogDetail from "./DogDetail";

function RoutesList({ dogs }) {
  return (
    <Routes>
      <Route element={<DogList dogs={dogs} />} path="/dogs" />
      <Route element={<DogList dogs={dogs} />} path="/*" />
      <Route element={<DogDetail dogs={dogs} />} path="/dogs/:name" />
    </Routes>
  );
}

export default RoutesList;
