import React from "react";

import "./Button.scss";

const Button = ({ text }) => {
  return (
    <div className="btn-container">
      <button className="btn--start">
        <span>{text}</span>
      </button>
    </div>
  );
};

export default Button;
