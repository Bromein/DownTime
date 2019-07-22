import React from "react";
import Searchbar from "./Searchbar";

import "./FoodSearch.scss";

class FoodSearch extends React.Component {
  constructor() {
    super();

    this.state = {
      search: "",
      food: [],
      error: false
    };
  }

  onInputChange = e => {
    this.setState({
      search: e.target.value.toLowerCase()
    });
    // console.log("I just got called from foodsearch");
  };

  // fetches the search from our food database if it exists //
  onFormSubmit = e => {
    e.preventDefault();

    fetch(`/foods/${this.state.search}`)
      .then(res => res.json())
      .then(res => {
        if (res.length) {
          console.log(res);
          this.setState({ food: res });
          this.setState({ search: "" });
          this.setState({ error: false });
        }
      })
      .catch(err => this.setState({ error: true }));
  };

  // renderFoodItem = () => {

  // };

  render() {
    return (
      <div className="foodsearch">
        <Searchbar
          err={this.state.error}
          onInputChange={this.onInputChange}
          onFormSubmit={this.onFormSubmit}
          value={this.state.search}
          title="Curious?"
          subtitle="Browse our food database 🔎"
        />
        {this.state.food &&
          this.state.food.map((item, i) => {
            return (
              <div key={i} className="foodItem">
                <p className="item__name">{item.name}</p>
                <p className="item__calories">{`${item.calories} calories per ${
                  item.size
                }`}</p>
              </div>
            );
          })}
      </div>
    );
  }
}

export default FoodSearch;
