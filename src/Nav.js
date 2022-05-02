// import react from "react";
import { Link } from "react-router-dom";

function Nav({ dogs }) {
  function renderDogs(dogs) {
    return dogs.map((dog) => <Link to="dogs/:dog"></Link>);
  }

  return <nav>{renderDogs(dogs)}</nav>;
}

export default Nav;
