import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/character.css";

export const Character = (props) => {
  const { store, actions } = useContext(Context);
  const [dataCharacter, setDataCharacter] = useState({});
  const { theid } = useParams();

  useEffect(() => {
    fetch("https://swapi.dev/api/people/" + theid)
      .then((response) => response.json())
      .then((data) => setDataCharacter(data));
  }, []);

  return (
    <>
      <div className="row d-flex justify-content-center">
        <img
          src={
            "https://starwars-visualguide.com/assets/img/characters/" +
            theid +
            ".jpg"
          }
          alt={"star wars character" + dataCharacter.name}
          style={{ maxWidth: "350px", maxHeight: "500px" }}
          className="col mb-4"
        />
        <div className="col text-center" style={{ maxWidth: "500px" }}>
          <div className="mt-5">
            <h1>{dataCharacter.name}</h1>
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
              <th scope="col">BirthDate</th>
              <th scope="col">Eye Color</th>
              <th scope="col">Gender</th>
              <th scope="col">Skin Color</th>
              <th scope="col">Height</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{dataCharacter.name}</td>
              <td>{dataCharacter.birth_year}</td>
              <td>{dataCharacter.eye_color}</td>
              <td>{dataCharacter.gender}</td>
              <td>{dataCharacter.skin_color}</td>
              <td>{dataCharacter.height}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
