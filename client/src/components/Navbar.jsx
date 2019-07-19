import React from "react";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__items">
        <li className="navbar__link">
          <a href="/">about</a>
        </li>
        <li className="navbar__link">
          <a href="/">foods</a>
        </li>
        <li className="navbar__link">
          <a href="/">exercises</a>
        </li>
        <li className="navbar__link">
          <a href="/">community</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
