import React from "react";
import Hamburger from "hamburger-react";
import logo from "../assets/logo.png";

const NavBar = ({ menuToggle }) => {
  return (
    <nav className="top-nav-bar">
      <div className="left-section">
        <ul>
          <li>
            <i className="bg-icon golden fal fa-map-marker-alt"></i>
            FIND A STORE
          </li>
          <li>
            <i className="bg-icon golden fas fa-phone-alt"></i>
            CONTACT US
          </li>
        </ul>
      </div>
      <div>
        <img src={logo} height={130} alt="Chalhoub Group Logo" />
      </div>
      <div>
        <ul>
          <li>
            <i className="lower-icon bg-icon golden far fa-globe"></i>
            <span className="arb">عربي</span>
          </li>
          <li>
            <i className="fas fa-search search-icon"></i>
          </li>
          <li>
            <Hamburger onToggle={(toggled) => menuToggle(toggled)} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
