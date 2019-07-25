import React from "react";
import "./App.scss";
import { Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import SignUpForm from "./components/SignUpForm";
import SignInForm from "./components/SignInForm";
import FoodPage from "./components/FoodPage";
import AddFood from "./components/AddFood";

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Route path="/" component={Header} />
        <Route path="/" component={Navbar} />
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/signup" component={SignUpForm} />
        <Route exact path="/signin" component={SignInForm} />
        <Route exact path="/foods" component={FoodPage} />
        <Route exact path="/foods/addfood" component={AddFood} />
      </div>
    );
  }
}

export default App;
