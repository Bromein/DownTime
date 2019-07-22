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
          <span className="logo__text">DownTime</span>
        </Link>
      </div>
      <ul className="header__items">
        <li className="header__item">Log In</li>
        <li className="header__item">
          <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
    </div>
  );
};
export default Header;
