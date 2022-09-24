import React from "react";

import "../../styles/planet.css";
import starWarsPlanet from "../../img/planet-sample.png";

export const Planet = () => (
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
          <h1>Tatooine</h1>
        </div>

        <div className="ms-3 mt-5">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum
            ligula vitae dapibus vestibulum. In iaculis, tortor vel accumsan
            pellentesque, magna sem volutpat sem, quis viverra sem ipsum vitae
            enim. Nullam nisi ex, faucibus tempus aliquet eu, mollis vitae diam.
            Aliquam convallis sem sit amet libero ultricies rutrum. Sed mollis
            consectetur eros, at bibendum ligula fringilla sit amet. In hac
            habitasse platea dictumst. Morbi tincidunt eget libero maximus
            vulputate. Nam massa urna, vulputate nec sagittis quis, euismod non
            risus. Etiam viverra placerat libero, vitae ornare nisi vulputate
            sit amet. Nam quam felis, aliquet vel tellus tincidunt, fringilla
            blandit nisl.
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
            <td>Tatooine</td>
            <td>arid</td>
            <td>2000000</td>
            <td>12</td>
            <td>6</td>
            <td>2.5</td>
          </tr>
        </tbody>
      </table>
    </div>
  </>
);
