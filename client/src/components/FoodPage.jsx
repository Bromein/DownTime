import React from "react";
import "./FoodPage.scss";
import { ReactComponent as Delete } from "../assets/cross.svg";

class FoodPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      foods: [],
      addingFood: false
    };
  }

  componentDidMount() {
    fetch("/foodlist")
      .then(res => res.json())
      .then(data => this.setState({ foods: data }));
  }

  render() {
    const { history } = this.props;
    return (
      <div className="foodpage">
        <div className="foodpage__header">Browse Our List Of Foods!</div>
        <div className="foodpage__content">
          {this.state.foods.map(item => (
            <div key={item.id} className="foodpage__item">
              <span>
                <h2>{item.name}</h2>
                <p>{item.calories} Calories</p>
                <p>per {item.size}</p>
              </span>
              <Delete className="foodpage__delete" />
            </div>
          ))}
        </div>
        {this.state.addingFood ? null : (
          <div className="cantfind">
            <p>
              Can't find the food you were looking for?{" "}
              <span
                className="addfood__link"
                onClick={() => history.push("/foods/addfood")}
              >
                Add it
              </span>
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default FoodPage;
