import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Nav from "./Nav";
import RoutesList from "./RoutesList";
import "./App.css";
import axios from "axios";

function App() {
  const [dogs, setDogs] = useState([]);

  useEffect(function getDogs() {
    async function axiosGetDogs() {
      const response = await axios.get("http://localhost:5001/dogs");
      setDogs(response.data);
    }
    axiosGetDogs();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Nav dogs={dogs} />

        <RoutesList dogs={dogs} />
      </BrowserRouter>
    </div>
  );
}

export default App;
