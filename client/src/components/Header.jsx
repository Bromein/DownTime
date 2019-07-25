import React from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { Link } from "react-router-dom";

import "./Header.scss";
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <Logo className="logo__icon" />
          <span className="logo__text">
            Down<span className="logo__text--accented">Time</span>
          </span>
        </Link>
      </div>
      <ul className="header__items">
        <li className="header__item">
          <Link to="/signin">Sign In</Link>
        </li>
        <li className="header__item">
          <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
    </div>
  );
};
export default Header;
