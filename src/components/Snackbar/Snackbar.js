import React from "react";
import { Alert } from "reactstrap";
import "./Snackbar.css";

const Snackbar = props => {
  const { isOpen, onDismiss } = props;

  return (
    <Alert
      color="info"
      isOpen={isOpen}
      toggle={onDismiss}
      className="snackbar m-3 text-center"
    >
      Your message has been sent.
      <br />
      Thank you for checking out my portfolio!
    </Alert>
  );
};

export default Snackbar;
