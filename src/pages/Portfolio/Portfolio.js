import React from "react";
import "./Portfolio.css";
import Project from "../../components/Project/Project";
import calluna from "../../assets/calluna.png";
import { Container, Row } from "reactstrap";

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <Container>
        <Row>
          <div className=" col-12 d-flex flex-column flex-lg-row">
            <Project
              title="THE CALLUNA"
              img={calluna}
              link="https://www.google.com"
            />
            <Project title="calluna" img={calluna} />
            <Project />
          </div>
        </Row>
        <Row></Row>
      </Container>
    </div>
  );
}
