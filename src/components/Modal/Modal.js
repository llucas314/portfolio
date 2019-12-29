import React, { useState } from "react";
import "./Modal.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { DarkArrow, GithubBrands } from "../../Icons";

const ProjectModal = props => {
  const { buttonLabel, className, img, title, description } = props;

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
            <button className="modal__button m-2">VISIT</button>
            <GithubBrands width={"32px"} height={"32px"} className="m-2" />
          </div>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ProjectModal;
