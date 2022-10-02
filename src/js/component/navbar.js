import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import starWarsLogo from "../../img/Temp-150x91.jpg";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

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
              &nbsp;
              <span className="badge bg-danger rounded-circle">
                {store.readMoreList.length}
              </span>
              &nbsp;Read Later
            </button>
            <ul className="dropdown-menu">
              {store.readMoreList.length > 0 ? (
                store.readMoreList.map((item, index) => (
                  <li key={index} className="dropdown-item">
                    {item}
                    <button
                      className="btn-trash border border-1 float-end"
                      onClick={() => {
                        actions.delReadMoreItem(item);
                      }}
                    >
                      <i className="fas fa-trash-alt"></i>
                    </button>
                  </li>
                ))
              ) : (
                <li className="dropdown-item text-center">(empty)</li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
