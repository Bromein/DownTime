import React from "react";
import "./App.scss";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [
        {
          name: "Pear",
          calories: 90
        },
        {
          name: "Apple",
          calories: 110
        },
        {
          name: "Orange",
          calories: 80
        }
      ]
    };
  }
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Navbar />
        <LandingPage items={this.state.items} />
      </div>
    );
  }
}

export default App;
