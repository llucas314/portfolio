import React, { useState } from "react";
import "./Modal.css";
import { Modal, ModalBody, ModalFooter, Button } from "reactstrap";
import { DarkArrow, GithubBrands } from "../../Icons";

const ProjectModal = props => {
  const { className, img, title, description, lang, link, github } = props;

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
          <p className="modal__p">{lang}</p>
          <div className="modal__buttons d-flex justify-content-center align-items-center">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <Button className="modal__button btn btn-info m-2">VISIT</Button>
            </a>
            <a href={github} target="_blank" rel="noopener noreferrer">
              <GithubBrands
                width={"32px"}
                height={"32px"}
                className="m-2"
                fill={"#17a2b8"}
              />
            </a>
          </div>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ProjectModal;
