import React from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";

function App() {
  return (
    <div>
      <Navigation />
      <Home />
      <About />
      <Portfolio />
    </div>
  );
}

export default App;
