import React from "react";

import starWarsCharacter from "../../img/storm-trooper.png";

export const Character = () => (
  <>
    <div className="row d-flex justify-content-center m-3">
      <img
        src={starWarsCharacter}
        alt="..."
        style={{ maxWidth: "500px", maxHeight: "600px" }}
        className="col"
      />
      <div className="col text-center">
        <h1>Storm Trooper</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum
          ligula vitae dapibus vestibulum. In iaculis, tortor vel accumsan
          pellentesque, magna sem volutpat sem, quis viverra sem ipsum vitae
          enim. Nullam nisi ex, faucibus tempus aliquet eu, mollis vitae diam.
          Aliquam convallis sem sit amet libero ultricies rutrum. Sed mollis
          consectetur eros, at bibendum ligula fringilla sit amet. In hac
          habitasse platea dictumst. Morbi tincidunt eget libero maximus
          vulputate. Nam massa urna, vulputate nec sagittis quis, euismod non
          risus. Etiam viverra placerat libero, vitae ornare nisi vulputate sit
          amet. Nam quam felis, aliquet vel tellus tincidunt, fringilla blandit
          nisl.
        </p>
      </div>
    </div>

    <div className="table-responsive">
      <table className="table caption-top">
        <caption>Planet Details</caption>
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
