import React from "react";
import "./Portfolio.css";
import Project from "../../components/Project/Project";
import calluna from "../../assets/calluna.png";
import cove from "../../assets/music-cove.png";
import superBowl from "../../assets/super-bowl.png";
import doggy from "../../assets/doggy-styles.png";
import simon from "../../assets/simon.png";
import national from "../../assets/parks.png";
import { Container, Row } from "reactstrap";

export default function Portfolio() {
  return (
    <div
      className="portfolio d-flex flex-column justify-content-center align-items-center"
      id="portfolio"
    >
      <div className="portfolio__h1">PORTFOLIO</div>
      <div className="container">
        <div className="row">
          <div className=" col-12 d-flex flex-column flex-lg-row">
            <Project title="The Calluna" img={calluna} />
            <Project title="The Music Cove" img={cove} />
            <Project title="Super Bowl Center" img={superBowl} />
          </div>
        </div>
        <div className="row">
          <div className=" col-12 d-flex flex-column flex-lg-row">
            <Project title="Simon" img={simon} />
            <Project title="Doggy Styles" img={doggy} />
            <Project title="National Parks" img={national} />
          </div>
        </div>
      </div>
    </div>
  );
}
