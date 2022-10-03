import React from "react";
import "./SideBar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faWindowMaximize } from "@fortawesome/free-solid-svg-icons";

import { NavMenu } from "../../Constants/NavMenu";

const index = (props) => {
  return (
    <aside
      className={`${
        props.isToggled === true ? " nav-hambuger-open" : "sidebar"
      }`}
    >
      <div className="logo">
        <FontAwesomeIcon icon={faWindowMaximize} className="icon" />
        <h2>Dashboard</h2>
      </div>
      <nav className="menu">
        <button
          className={`${
            props.isToggled === true
              ? "sidenav-hamburger-visible"
              : "sidenav-hamburger-not-visible"
          }`}
          onClick={props.toggleMenu}
        >
          <FontAwesomeIcon icon={faClose} />
        </button>
        <ul>
          {NavMenu.map((menuItem) => (
            <li className="nav-item">
              <div className="nav-item-icon">
                <FontAwesomeIcon icon={menuItem.icon} />
              </div>
              {menuItem.name}
            </li>
          ))}
        </ul>
        <div
          className={`${
            props.isToggled === true
              ? "navbar-user-profile-visible"
              : "navbar-user-profile-not-visible"
          }`}
        >
          <img
            src="https://avatars.githubusercontent.com/u/40751854?v=4"
            alt="vpbs"
          />
          <span>Balasaravanan</span>
        </div>
      </nav>
    </aside>
  );
};

export default index;
