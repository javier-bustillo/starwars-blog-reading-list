import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => (
  <div className="mt-5 ms-5">
    <div className="ms-3">
      <h1>Characters</h1>
    </div>

    <p>
      <img src={rigoImage} />
    </p>
    <a href="#" className="btn btn-success">
      If you see this green button, bootstrap is working
    </a>
  </div>
);
