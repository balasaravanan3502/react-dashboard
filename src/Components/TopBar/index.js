import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import "./TopBar.css";
const index = (props) => {
  return (
    <section className="top-bar">
      <div className="top-section-one">
        <button className="nav-hambuger" onClick={props.toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div className="search-bar">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input type="text" />
        </div>
        <div className="user-profile">
          <i className="fa-sharp fa-solid fa-bell"></i>
          <img
            src="https://avatars.githubusercontent.com/u/40751854?v=4"
            alt="vpbs"
          />
          <span>Balasaravanan</span>
        </div>
      </div>
      <div className="top-section-one top-bar-two">
        <div className="profile">
          <img
            src="https://avatars.githubusercontent.com/u/40751854?v=4"
            alt="vpbs"
          />
          <div className="profile-name">
            <p className="p1">Hi, there!</p>
            <p className="name">Balasaravanan (@vpbs)</p>
          </div>
        </div>
        <div className="button-section">
          <button className="button">New</button>
          <button className="button">Upload</button>
          <button className="button">Share</button>
        </div>
      </div>
    </section>
  );
};

export default index;
