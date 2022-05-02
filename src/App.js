import { BrowserRouter, Routes, useState } from "react-router-dom";
import Nav from "./Nav";
import RoutesList from "./RoutesList";
import "./App.css";
import axios from "axios";

function App() {
  const [dogs, setDogs] = useState([]);

  async function getDogs() {
    const response = await axios.get("http://localhost:5001/dogs");
    setDogs(response.data);
  }

  getDogs();

  return (
    <div className="App">
      <BrowserRouter>
        <Nav dogs={dogs} />
        <Routes>
          <RoutesList dogs={dogs} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
