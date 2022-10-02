import React from "react";
import { Link } from "react-router-dom";

import starWarsLogo from "../../img/Temp-150x91.jpg";
import { ImBin } from "react-icons/im";

/* import "../../styles/navbar.css"; */

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/">
            <a className="navbar-brand">
              <img
                className="mt-3 ms-5 mb-2"
                src={starWarsLogo}
                alt="star wars logo"
              />
            </a>
          </Link>
          <div className="btn-group dropstart me-5">
            <button
              type="button"
              className="btn btn-dark dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              &nbsp;<span className="badge bg-danger rounded-circle">0</span>
              &nbsp;Read Later
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Menu item &nbsp;&nbsp;
                  <button className="border-0 bg-transparent">
                    <ImBin />
                  </button>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Menu item &nbsp;&nbsp;
                  <button className="border-0 bg-transparent">
                    <ImBin />
                  </button>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Menu item &nbsp;&nbsp;
                  <button className="border-0 bg-transparent">
                    <ImBin />
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
