import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { CharacterCard } from "../component/characterCard";
import { PlanetCard } from "../component/planetCard";

import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);
  

  return (
    <div className="mt-5 ms-5">
      <div className="ms-3 mb-5">
        <h1 className="characters-title">Characters</h1>
      </div>
      <div
        className="card-group-wrapper ms-3"
        style={{ overflowX: "auto", fontSize: "14px" }}
      >
        <div className="card-group row gx-5 mb-5">
          <div className="col">
            <div className="card">
              <img
                src="https://via.placeholder.com/400"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title"></h5>
                <p className="card-text">
                  Gender: male<br></br>
                  Hair color: blonde<br></br>
                  Eye color: blue
                </p>
                <div className="d-grid gap-2 d-md-block mt-3 mb-2">
                  <div className="row justify-content-between">
                    <div className="col-8">
                      <Link to="/character-details">
                        <button
                          className="btn btn-outline-primary"
                          type="button"
                        >
                          Learn more!
                        </button>
                      </Link>
                    </div>
                    <div className="col-4">
                      <button
                        className="like-btn text-end bg-transparent"
                        type="button"
                      >
                        <i className="fa fa-heart fa-1x p-2" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
};
