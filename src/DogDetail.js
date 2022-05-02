import React from "react";
import { useParams } from "react-router-dom";

function DogDetail({ dogs }) {
  let { name } = useParams();
  name = name.toLowerCase();

  if (name && dogs.length > 0) {
    let dog = dogs.find((dog) => dog.name.toLowerCase() === name);

    return (
      <div>
        <img src={`/${dog.name}.jpg`} />
        <br />
        {dog.name}
        <br />
        Years old: {dog.age}
        <br />
        Dog Facts:
        {dog.facts.map((fact) => (
          <div key={fact}>{fact}</div>
        ))}
      </div>
    );
  }
  return <div>Loading...</div>;
}

export default DogDetail;
