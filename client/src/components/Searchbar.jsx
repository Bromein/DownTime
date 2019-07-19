import React from "react";
import { ReactComponent as SearchIcon } from "../assets/search.svg";

import "./Searchbar.scss";

const Searchbar = ({ title, subtitle }) => {
  return (
    <div className="searchbar-wrapper">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <form action="/" className="input-wrap">
        <input
          placeholder="Get the nutritional info for any food"
          className="searchbar__input"
          type="search"
          name=""
        />
        <button className="btn" type="submit">
          <SearchIcon className="searchbar__icon" />
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
