import React from "react";
import "./App.scss";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Navbar />
        <LandingPage />
      </div>
    );
  }
}

export default App;
