import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const PlanetCard = ({ name, population, terrain, gravity, id }) => {
  const { actions } = useContext(Context);
  return (
    <div className="col" style={{ minWidth: "400px" }}>
      <div className="card">
        <img src={"https://starwars-visualguide.com/assets/img/planets/" + id + ".jpg"} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            Population: {population}
            <br></br>
            Terrain: {terrain}
            <br></br>
            Gravity: {gravity}
            <br></br>
          </p>
          <div className="d-grid gap-2 d-md-block mt-3 mb-2">
            <div className="row justify-content-between">
              <div className="col-8">
                <Link to={"/planet-details/" + id}>
                  <button className="btn btn-outline-primary" type="button">
                    Learn more!
                  </button>
                </Link>
              </div>
              <div className="col-4">
                <button
                  className="like-btn text-end bg-transparent"
                  type="button"
                  onClick={() => {
                    actions.addReadMoreItem(name);
                  }}
                >
                  <i className="fa fa-heart fa-1x p-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
