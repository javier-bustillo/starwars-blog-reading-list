import React from "react";
import { Link } from "react-router-dom";
import { CharacterCard } from "../component/characterCard";
import { PlanetCard } from "../component/planetCard";

import "../../styles/home.css";

export const Home = () => (
  <div className="mt-5 ms-5">
    <div className="ms-3 mb-5">
      <h1 className="characters-title">Characters</h1>
    </div>
    <div
      className="card-group-wrapper ms-3"
      style={{ overflowX: "auto", fontSize: "14px" }}
    >
      <div className="card-group row gx-5 mb-5">
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
      </div>
    </div>
    <div className="ms-3 mt-5 mb-5">
      <h1 className="planets-title">Planets</h1>
    </div>
    <div
      className="card-group-wrapper ms-3"
      style={{ overflowX: "auto", fontSize: "14px" }}
    >
      <div className="card-group row gx-5 mb-5">
        <PlanetCard />
        <PlanetCard />
        <PlanetCard />
        <PlanetCard />
      </div>
    </div>
  </div>
);
