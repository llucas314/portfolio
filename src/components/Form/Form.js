import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import "./Form.css";
const ContactForm = props => {
  return (
    <Form className="contact-form d-flex flex-column align-items-center">
      <FormGroup>
        <Input
          type="text"
          name="name"
          id="Name"
          placeholder="NAME"
          className="contact-form__input"
        />
      </FormGroup>
      <FormGroup>
        <Input
          type="email"
          name="email"
          id="ContactFormEmail"
          placeholder="EMAIL"
          className="contact-form__input"
        />
      </FormGroup>
      <FormGroup>
        <Input
          type="textarea"
          name="text"
          id="ContactFormText"
          placeholder="MESSAGE"
          className="contact-form__input"
        />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
};

export default ContactForm;
