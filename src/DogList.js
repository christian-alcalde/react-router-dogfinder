import React from "react";
import { Link } from "react-router-dom";
// import { Route } from "react-router-dom";

function DogList({ dogs }) {
  console.log(dogs);
  return (
    <div>
      {dogs.map((dog) => (
        <div key={dog.name} style={{ margin: "10px" }}>
          <Link key={dog.name} to={`dogs/${dog.name.toLowerCase()}`}>
            <img src={`/${dog.name}.jpg`} />
            {dog.name}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default DogList;
