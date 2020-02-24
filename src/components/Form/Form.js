import React, { useState } from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";
import "./Form.css";
import emailjs from "emailjs-com";
import Snackbar from "../Snackbar/Snackbar";
import { motion } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = props => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [captcha, setCaptcha] = useState(false);
  const [visible, setVisible] = useState(false);
  const isOpen = () => setVisible(true);
  const onDismiss = () => setVisible(false);
  const handleChange = value => {
    setCaptcha(true);
  };
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
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_EMAIL_JS_USER_ID
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
    <>
      {captcha === true ? (
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
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
            <Button type="submit">Submit</Button>
          </motion.div>
          <Snackbar isOpen={visible} onDismiss={onDismiss} />
        </Form>
      ) : (
        <>
          <p className="contact-form_p">
            Let's get in contact!
            <br />
            I'd love to hear from you.
          </p>
          <ReCAPTCHA
            sitekey={
              process.env.NODE_ENV === "production"
                ? process.env.REACT_APP_CAPTCHA_SITE_KEY
                : process.env.REACT_APP_CAPTCHA_SITE_KEY_DEV
            }
            onChange={handleChange}
          />
        </>
      )}
    </>
  );
};

export default ContactForm;
