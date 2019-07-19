import React from "react";
import "./App.scss";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Navbar />
      <LandingPage />
    </div>
  );
}

export default App;
