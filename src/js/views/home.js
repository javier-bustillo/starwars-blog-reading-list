import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { CharacterCard } from "../component/characterCard";
import { PlanetCard } from "../component/planetCard";

import "../../styles/home.css";

export const Home = () => {
  const { store } = useContext(Context);

  return (
    <div className="mt-5 ms-5">
      <div className="ms-3 mb-5">
        <h1 className="characters-title">Characters</h1>
        <hr></hr>
      </div>
      <div className="card-group-wrapper ms-3" style={{ overflowX: "auto" }}>
        <div className="card-group row gx-5 mb-5 d-flex flex-nowrap">
          {store.characters.map((item, index) => (
            <CharacterCard
              key={index}
              name={item.name}
              gender={item.gender}
              hairColor={item.hair_color}
              eyeColor={item.eye_color}
              id={index + 1}
            />
          ))}
        </div>
      </div>
      <div className="ms-3 mt-5 mb-5">
        <h1 className="planets-title">Planets</h1>
        <hr></hr>
      </div>

      <div className="card-group-wrapper ms-3" style={{ overflowX: "auto" }}>
        <div className="card-group row gx-5 mb-5 d-flex flex-nowrap">
          {store.planets.map((item, index) => (
            <PlanetCard
              key={index}
              name={item.name}
              population={item.population}
              terrain={item.terrain}
              gravity={item.gravity}
              id={index + 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
