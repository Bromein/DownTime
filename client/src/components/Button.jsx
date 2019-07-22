import React from "react";

import "./Button.scss";

// ? this button allows linking if provided with a takeMeTo prop <Button takeMeTo="/" />

const Button = ({ text, history, takeMeTo, ...otherProps }) => {
  return (
    <div className="btn-container">
      <button
        onClick={takeMeTo ? () => history.push(`${takeMeTo}`) : null}
        className="btn--start"
      >
        <span>{text}</span>
      </button>
    </div>
  );
};

export default Button;
