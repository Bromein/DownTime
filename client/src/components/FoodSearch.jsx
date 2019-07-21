import React from "react";
import Searchbar from "./Searchbar";

class FoodSearch extends React.Component {
  constructor() {
    super();

    this.state = {
      search: ""
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
      .then(res => console.log(res));
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
      </div>
    );
  }
}

export default FoodSearch;
