import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

import starWarsCharacter from "../../img/characters-sample.png";
import "../../styles/character.css";

export const Vehicle = (props) => {
  const [dataVehicle, setDataVehicle] = useState({});
  const { theid } = useParams();

  useEffect(() => {
    fetch("https://swapi.dev/api/vehicles/" + theid)
      .then((response) => response.json())
      .then((data) => setDataVehicle(data));
  }, []);

  return (
    <>
      <div className="row d-flex justify-content-center">
        <img
          src={starWarsCharacter}
          alt="..."
          style={{ maxWidth: "350px", maxHeight: "500px" }}
          className="col mb-4"
        />
        <div className="col text-center" style={{ maxWidth: "500px" }}>
          <div className="mt-5">
            <h1>{dataVehicle.name}</h1>
          </div>

          <div className="ms-3 mt-5">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum
              ligula vitae dapibus vestibulum. In iaculis, tortor vel accumsan
              pellentesque, magna sem volutpat sem, quis viverra sem ipsum vitae
              enim. Nullam nisi ex, faucibus tempus aliquet eu, mollis vitae
              diam. Aliquam convallis sem sit amet libero ultricies rutrum. Sed
              mollis consectetur eros, at bibendum ligula fringilla sit amet. In
              hac habitasse platea dictumst. Morbi tincidunt eget libero maximus
              vulputate. Nam massa urna, vulputate nec sagittis quis, euismod
              non risus. Etiam viverra placerat libero, vitae ornare nisi
              vulputate sit amet. Nam quam felis, aliquet vel tellus tincidunt,
              fringilla blandit nisl.
            </p>
          </div>
        </div>
      </div>
      <div className="table-responsive ms-2 me-2">
        <table className="table caption-top">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Model</th>
              <th scope="col">Manufacturer</th>
              <th scope="col">Credits</th>
              <th scope="col">Length</th>
              <th scope="col">Crew</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{dataVehicle.name}</td>
              <td>{dataVehicle.model}</td>
              <td>{dataVehicle.manufacturer}</td>
              <td>{dataVehicle.cost_in_credits}</td>
              <td>{dataVehicle.length}</td>
              <td>{dataVehicle.crew}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
