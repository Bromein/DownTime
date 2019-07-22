import React from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import SignUp from "./components/SignUp";
import FoodPage from "./components/FoodPage";

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Navbar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/foods" component={FoodPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
