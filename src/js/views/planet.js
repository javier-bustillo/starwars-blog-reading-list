import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

import starWarsPlanet from "../../img/planet-sample.png";
import "../../styles/planet.css"

export const Planet = (props) => {
  const { store, actions } = useContext(Context);
  const [dataPlanet, setDataPlanet] = useState({});
  const { theid } = useParams();

  useEffect(() => {
    fetch("https://swapi.dev/api/planets/" + theid)
      .then((response) => response.json())
      .then((data) => setDataPlanet(data));
  }, []);

  return (
    <>
      <div className="row d-flex justify-content-center m-3">
        <img
          src={starWarsPlanet}
          alt="..."
          style={{ maxWidth: "500px" }}
          className="col"
        />
        <div className="col text-center" style={{ maxWidth: "600px" }}>
          <div className="mt-2">
            <h1>{dataPlanet.name}</h1>
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

      <div className="table-responsive">
        <table className="table caption-top">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Climate</th>
              <th scope="col">Population</th>
              <th scope="col">Orbital Period</th>
              <th scope="col">Rotation Period</th>
              <th scope="col">Diameter</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{dataPlanet.name}</td>
              <td>{dataPlanet.terrain}</td>
              <td>{dataPlanet.population}</td>
              <td>{dataPlanet.orbital_period}</td>
              <td>{dataPlanet.rotation_period}</td>
              <td>{dataPlanet.diameter}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
