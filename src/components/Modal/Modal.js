import React, { useState } from "react";
import "./Modal.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { DarkArrow, GithubBrands } from "../../Icons";

const ProjectModal = props => {
  const { className, img, title, description, link, github } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <button
        style={{ backgroundColor: "transparent", border: "none" }}
        onClick={toggle}
      >
        <DarkArrow width={"32px"} height={"32px"} />
      </button>
      <Modal isOpen={modal} toggle={toggle} className={className} centered>
        <ModalBody
          className="modal__body"
          style={{ backgroundImage: `url(${img})` }}
        ></ModalBody>
        <ModalFooter className="modal__footer d-flex flex-column">
          <h1 className="modal__h1">{title}</h1>
          <p className="modal__p">{description}</p>
          <div className="modal__buttons d-flex justify-content-center align-items-center">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <button className="modal__button m-2">VISIT</button>
            </a>
            <a href={github} target="_blank" rel="noopener noreferrer">
              <GithubBrands width={"32px"} height={"32px"} className="m-2" />
            </a>
          </div>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ProjectModal;
