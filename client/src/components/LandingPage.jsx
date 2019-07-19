import React from "react";

import Button from "./Button";
import Searchbar from "./Searchbar";

import "./LandingPage.scss";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="section1">
        <div className="section__item">
          <h1 className="section1__info">
            Smart minds lead to a healthy body.
          </h1>
          <p className="section1__info">
            Take control of your goals. Track calories, breakdown ingredients,
            and log activities with DownTime.
          </p>
          <Button text="START FOR FREE" />
          <p className="section1__info">Already have an account? Login</p>
        </div>
      </div>

      <div className="section2">
        <Searchbar title="Curious?" subtitle="Browse our food database 🔎" />
      </div>
    </div>
  );
};

export default LandingPage;
