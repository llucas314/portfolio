import React from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <div>
      <Navigation />
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
