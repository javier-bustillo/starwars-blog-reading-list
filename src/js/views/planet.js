import React from "react";

import starWarsPlanet from "../../img/planet-sample.png";
import "../../styles/home.css";

export const Planet = () => (
  <div className="d-flex row justify-content-center m-5">
    <div className="card mb-3 border-0" style={{ maxWidth: "1500px" }}>
      <div className="col-md-4">
        <img
          src={starWarsPlanet}
          className="img-fluid rounded-start mt-5"
          alt="..."
        />
      </div>

      <div className="col-md-3 mt-5 text-end">
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
  </div>
);
