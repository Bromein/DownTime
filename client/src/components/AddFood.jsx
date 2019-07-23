import React from "react";

import "./AddFood.scss";

class AddFood extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      calories: null,
      size: "",
      error: ""
    };
  }

  inputValidation = () => {
    const { name, calories, size } = this.state;

    if (name.length && calories && size.length) {
      return true;
    }
    console.log("input validation was false");
    this.setState({
      error: "There was an error submitting your food, double check your inputs"
    });
    return false;
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.inputValidation()) {
      fetch(`/foods/addfood/`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: this.state.name.toLowerCase(),
          calories: this.state.calories,
          size: this.state.size.toLowerCase()
        })
      })
        .then(res => console.log(res))
        .catch(err => console.log(err));
      this.props.history.push("/foods");
    }
  };

  render() {
    return (
      <div className="addfood">
        <h1>Here at downtime, everyone contributes</h1>
        <form onSubmit={this.handleSubmit} className="addfood__form">
          <div className="addfood__error">{this.state.error}</div>
          <label className="addfood__label">
            Name:
            <input
              className="addfood__input"
              type="text"
              name=""
              id=""
              onChange={e => this.setState({ name: e.target.value })}
              required
            />
          </label>
          <label className="addfood__label">
            Calories:
            <input
              className="addfood__input"
              type="number"
              onChange={e => this.setState({ calories: e.target.value })}
              required
            />
          </label>
          <label className="addfood__label">
            Size:
            <input
              required
              className="addfood__input"
              type="text"
              name=""
              id=""
              onChange={e => this.setState({ size: e.target.value })}
            />
          </label>
          <button className="addfood__button" onClick={this.handleSubmit}>
            Add it
          </button>
        </form>
      </div>
    );
  }
}

export default AddFood;
