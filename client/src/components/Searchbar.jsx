import React from "react";
import { ReactComponent as SearchIcon } from "../assets/search.svg";

import "./Searchbar.scss";

const Searchbar = ({ title, subtitle, value, onFormSubmit, onInputChange }) => {
  return (
    <div className="searchbar-wrapper">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <form onSubmit={e => onFormSubmit(e)} className="input-wrap">
        <input
          placeholder="Get the nutritional info for any food"
          className="searchbar__input"
          type="search"
          value={value}
          onChange={e => onInputChange(e)}
        />
        <button className="btn" type="submit">
          <SearchIcon className="searchbar__icon" />
        </button>
      </form>
    </div>
  );
};

// onInputChange = e => {
//   this.setState({
//     search: e.target.value.toLowerCase()
//   });
// };

// onFormSubmit = e => {
//   e.preventDefault();

//   fetch(`/foods/${this.state.search}`)
//     .then(res => res.json())
//     .then(res => console.log(res));
//   this.setState({ search: "" });
// };

export default Searchbar;
