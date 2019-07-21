import React from "react";
import Searchbar from "./Searchbar";

class FoodSearch extends React.Component {
  constructor() {
    super();

    this.state = {
      search: "",
      food: []
    };
  }

  onInputChange = e => {
    this.setState({
      search: e.target.value.toLowerCase()
    });
    console.log("I just got called from foodsearch");
  };

  onFormSubmit = e => {
    e.preventDefault();

    fetch(`/foods/${this.state.search}`)
      .then(res => res.json())
      .then(res => this.setState({ food: res }));
    this.setState({ search: "" });
  };

  render() {
    return (
      <div>
        <Searchbar
          onInputChange={this.onInputChange}
          onFormSubmit={this.onFormSubmit}
          value={this.state.search}
          title="Curious?"
          subtitle="Browse our food database 🔎"
        />
        {this.state.food.map(item => {
          return (
            <div className="foodItem">
              <h1>{item.name}</h1>
              <p>{item.calories}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default FoodSearch;
