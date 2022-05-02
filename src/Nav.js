// import react from "react";
import { Link } from "react-router-dom";

function Nav({ dogs }) {
  return (
    <nav>
      <span style={{ margin: "10px" }}>
        <Link key={"home"} to={"/"}>
          Home
        </Link>
      </span>
      {dogs.map((dog) => (
        <span key={dog.name} style={{ margin: "10px" }}>
          <Link key={dog.name} to={`dogs/${dog.name.toLowerCase()}`}>
            {dog.name}
          </Link>
        </span>
      ))}
    </nav>
  );
}

export default Nav;
