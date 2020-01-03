import React from "react";
import "./Project.css";
import ProjectModal from "../Modal/Modal";

export default function Project(props) {
  return (
    <div
      className="project  col-lg-4 p-0"
      style={{ backgroundImage: `url(${props.img})` }}
    >
      <div className="project__modal  p-0  d-flex flex-column justify-content-center align-items-center">
        <h1 className="project__h1">{props.title}</h1>
        <div className="project__links d-flex justify-content-center align-items-center">
          <ProjectModal
            img={props.img}
            className="modal"
            title={props.title}
            description={props.description}
            lang={props.lang}
            link={props.link}
            github={props.github}
          />
        </div>
      </div>
    </div>
  );
}
Project.defaultProps = {
  img: "/",
  title: "GOOGLE"
};
