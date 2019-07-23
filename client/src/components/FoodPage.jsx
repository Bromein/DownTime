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
      .then(data => this.setState({ foods: [...data] }));
  }

  handleFoodRemoval = (e, item) => {
    const currentItem = item;

    fetch("/foods/deletefood/", {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id: item.id })
    }).then(res => {
      // whew lad that was a doosy // console.log("success");
      this.setState(prevState => ({
        foods: prevState.foods.filter(item => item.id !== currentItem.id)
      }));
    });
  };

  render() {
    const { history } = this.props;
    return (
      <div className="foodpage">
        <div className="foodpage__header">
          Browse our community driven food database
        </div>
        <div className="foodpage__content">
          {this.state.foods.map(item => (
            <div key={item.id} className="foodpage__item">
              <span>
                <h2>{item.name}</h2>
                <p>{item.calories} Calories</p>
                <p>per {item.size}</p>
              </span>

              <Delete
                className="foodpage__delete"
                onClick={(e, id) => this.handleFoodRemoval(e, item)}
              />
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
