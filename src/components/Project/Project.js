import React from "react";
import "./Project.css";
import { ButtonIcon, DarkArrow, GithubBrands } from "../../Icons";
import icon from "../../assets/dark-arrow.png";
import { Container, Row } from "reactstrap";

export default function Project(props) {
  return (
    <div
      className="project  col-lg-4 p-0"
      style={{ backgroundImage: `url(${props.img})` }}
    >
      <div className="project__modal  p-0  d-flex flex-column justify-content-center align-items-center">
        <h1 className="project__h1">{props.title}</h1>
        <div className="project__links d-flex justify-content-center align-items-center">
          <a
            href={props.link}
            rel="noopener noreferrer"
            target="_blank"
            className="project__link m-2"
          >
            <DarkArrow width={"32px"} height={"32px"} />
          </a>
        </div>
      </div>
    </div>
  );
}
Project.defaultProps = {
  img: "/",
  title: "GOOGLE",
  link: "https://www.google.com"
};
