import React, { useState } from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";
import "./Form.css";
import emailjs from "emailjs-com";
import Snackbar from "../Snackbar/Snackbar";
const ContactForm = props => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [visible, setVisible] = useState(false);
  const isOpen = () => setVisible(true);
  const onDismiss = () => setVisible(false);
  const handleSubmit = e => {
    e.preventDefault();
    let templateParams = {
      sender: values.name,
      from_name: values.email,
      subject: values.subject,
      message_html: values.message
    };
    emailjs
      .send(
        "llucas314_gmail_com",
        "template_dI3s5ifE",
        templateParams,
        "user_RAMHjBfnubIflGV2keCMT"
      )
      .then(
        result => {
          console.log(result.text);
          isOpen();
        },
        error => {
          console.log(error.text);
        }
      );
    resetForm();
  };
  const resetForm = () => {
    setValues({ name: "", email: "", subject: "", message: "" });
  };
  const handleInputChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  return (
    <Form
      className="contact-form d-flex flex-column align-items-center"
      onSubmit={handleSubmit}
    >
      <FormGroup>
        <Input
          type="text"
          name="name"
          id="Name"
          placeholder="NAME"
          className="contact-form__input"
          value={values.name}
          onChange={handleInputChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <Input
          type="email"
          name="email"
          id="ContactFormEmail"
          placeholder="EMAIL"
          className="contact-form__input"
          value={values.email}
          onChange={handleInputChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <Input
          type="text"
          name="subject"
          id="Subject"
          placeholder="SUBJECT"
          className="contact-form__input"
          value={values.subject}
          onChange={handleInputChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <Input
          type="textarea"
          name="message"
          id="ContactFormText"
          placeholder="MESSAGE"
          className="contact-form__input"
          value={values.message}
          onChange={handleInputChange}
          required
        />
      </FormGroup>
      <Button type="submit">Submit</Button>
      <Snackbar isOpen={visible} onDismiss={onDismiss} />
    </Form>
  );
};

export default ContactForm;
