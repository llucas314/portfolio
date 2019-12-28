import React from "react";
import "./Portfolio.css";
import Project from "../../components/Project/Project";
import calluna from "../../assets/calluna.png";

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <div className="container">
        <div className="row">
          <Project
            title="THE CALLUNA"
            img={calluna}
            link="https://www.google.com"
          />
          <Project title="calluna" img={calluna} />
          <Project />
        </div>
      </div>
    </div>
  );
}
