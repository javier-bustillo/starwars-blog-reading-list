import React from "react";
import { Link } from "react-router-dom";

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
        <div className="col">
          <div className="card">
            <img
              src="https://via.placeholder.com/400"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Character Name</h5>
              <p className="card-text">
                Gender: male<br></br>
                Hair color: blonde<br></br>
                Eye color: blue
              </p>
              <div className="d-grid gap-2 d-md-block mt-3 mb-2">
                <div className="row justify-content-evenly">
                  <Link to="/character-details">
                    <button className="btn btn-primary ms-2 col" type="button">
                      Learn more!
                    </button>
                  </Link>
                  &nbsp;
                  <Link to="">
                    <button
                      className="col text-end bg-transparent border-0"
                      type="button"
                    >
                      <i className="fa fa-heart me-5 fa-2x text-danger" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src="https://via.placeholder.com/400"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Character Name</h5>
              <p className="card-text">
                Gender: male<br></br>
                Hair color: blonde<br></br>
                Eye color: blue
              </p>
              <div className="d-grid gap-2 d-md-block mt-3 mb-2">
                <div className="row justify-content-evenly">
                  <button className="btn btn-primary ms-2 col" type="button">
                    Learn more!
                  </button>
                  &nbsp;
                  <button
                    className="col text-end bg-transparent border-0"
                    type="button"
                  >
                    <i className="fa fa-heart me-5 fa-2x text-danger" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src="https://via.placeholder.com/400"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Character Name</h5>
              <p className="card-text">
                Gender: male<br></br>
                Hair color: blonde<br></br>
                Eye color: blue
              </p>
              <div className="d-grid gap-2 d-md-block mt-3 mb-2">
                <div className="row justify-content-evenly">
                  <button className="btn btn-primary ms-2 col" type="button">
                    Learn more!
                  </button>
                  &nbsp;
                  <button
                    className="col text-end bg-transparent border-0"
                    type="button"
                  >
                    <i className="fa fa-heart me-5 fa-2x text-danger" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src="https://via.placeholder.com/400"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Character Name</h5>
              <p className="card-text">
                Gender: male<br></br>
                Hair color: blonde<br></br>
                Eye color: blue
              </p>
              <div className="d-grid gap-2 d-md-block mt-3 mb-2">
                <div className="row justify-content-evenly">
                  <button className="btn btn-primary ms-2 col" type="button">
                    Learn more!
                  </button>
                  &nbsp;
                  <button
                    className="col text-end bg-transparent border-0"
                    type="button"
                  >
                    <i className="fa fa-heart me-5 fa-2x text-danger" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
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
        <div className="col">
          <div className="card">
            <img
              src="https://via.placeholder.com/400"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Planet Name</h5>
              <p className="card-text">
                Population: 4000<br></br>
                Terrain: mountain<br></br>
              </p>
              <div className="d-grid gap-2 d-md-block mt-3 mb-2">
                <div className="row justify-content-evenly">
                  <Link to="planet-details">
                    <button className="btn btn-primary ms-2 col" type="button">
                      Learn more!
                    </button>
                  </Link>
                  &nbsp;
                  <button
                    className="col text-end bg-transparent border-0"
                    type="button"
                  >
                    <i className="fa fa-heart me-5 fa-2x text-danger" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src="https://via.placeholder.com/400"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Planet Name</h5>
              <p className="card-text">
                Population: 4000<br></br>
                Terrain: mountain<br></br>
              </p>
              <div className="d-grid gap-2 d-md-block mt-3 mb-2">
                <div className="row justify-content-evenly">
                  <button className="btn btn-primary ms-2 col" type="button">
                    Learn more!
                  </button>
                  &nbsp;
                  <button
                    className="col text-end bg-transparent border-0"
                    type="button"
                  >
                    <i className="fa fa-heart me-5 fa-2x text-danger" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src="https://via.placeholder.com/400"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Planet Name</h5>
              <p className="card-text">
                Population: 4000<br></br>
                Terrain: mountain<br></br>
              </p>
              <div className="d-grid gap-2 d-md-block mt-3 mb-2">
                <div className="row justify-content-evenly">
                  <button className="btn btn-primary ms-2 col" type="button">
                    Learn more!
                  </button>
                  &nbsp;
                  <button
                    className="col text-end bg-transparent border-0"
                    type="button"
                  >
                    <i className="fa fa-heart me-5 fa-2x text-danger" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src="https://via.placeholder.com/400"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Planet Name</h5>
              <p className="card-text">
                Population: 4000<br></br>
                Terrain: mountain<br></br>
              </p>
              <div className="d-grid gap-2 d-md-block mt-3 mb-2">
                <div className="row justify-content-evenly">
                  <button className="btn btn-primary ms-2 col" type="button">
                    Learn more!
                  </button>
                  &nbsp;
                  <button
                    className="col text-end bg-transparent border-0"
                    type="button"
                  >
                    <i className="fa fa-heart me-5 fa-2x text-danger" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
