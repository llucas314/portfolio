import React from "react";
import "./Project.css";
import { ButtonIcon, DarkArrow, GithubBrands } from "../../Icons";
import icon from "../../assets/dark-arrow.png";
import { Container, Row } from "reactstrap";

export default function Project(props) {
  return (
    <Container>
      <Row>
        <div
          className="project col-12 p-0"
          style={{ backgroundImage: `url(${props.img})` }}
        >
          <div className="project__modal  p-0 col-12 d-flex flex-column justify-content-center align-items-center">
            <h1 className="project__h1">{props.title}</h1>
            <div className="project__links d-flex justify-content-center align-items-center">
              {props.link ? (
                <a
                  href={props.link}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="project__link m-2"
                >
                  <DarkArrow width={"32px"} height={"32px"} />
                </a>
              ) : (
                ""
              )}
              <a
                href={props.github}
                rel="noopener noreferrer"
                target="_blank"
                className="project__link m-2"
              >
                <GithubBrands width={"32px"} height={"32px"} />
              </a>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
}
Project.defaultProps = {
  img: "/",
  title: "GOOGLE",
  github: "https://www.google.com"
};
