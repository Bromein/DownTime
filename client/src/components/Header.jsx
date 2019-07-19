import React from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";

import "./Header.scss";
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <Logo className="logo__icon" />
        <span className="logo__text">DownTime</span>
      </div>
      <ul className="header__items">
        <li className="header__item">Log In</li>
        <li className="header__item">Sign Up</li>
      </ul>
    </div>
  );
};
export default Header;
