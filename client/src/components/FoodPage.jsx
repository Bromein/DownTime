import React from "react";

import "./FoodPage.scss";

class FoodPage extends React.Component {
  constructor() {
    super();

    this.state = {
      foods: []
    };
  }

  componentDidMount() {
    fetch("/foodlist")
      .then(res => res.json())
      .then(data => this.setState({ foods: data }));
  }

  render() {
    return (
      <div className="foodpage">
        <div className="foodpage__header">Browse Our List Of Foods!</div>
        <div className="foodpage__content">
          {this.state.foods.map(item => (
            <div key={item.id} className="foodpage__item">
              <h2>{item.name}</h2>
              <p>{item.calories} Calories</p>
              <p>per {item.size}</p>
            </div>
          ))}
        </div>
        <div className="cantfind">
          <p>Can't find the food you were looking for? Add it</p>
        </div>
      </div>
    );
  }
}

export default FoodPage;
