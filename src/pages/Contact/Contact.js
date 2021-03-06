import React from "react";
import "./Contact.css";
import ContactForm from "../../components/Form/Form";
import Footer from "../../components/Footer/Footer";

export default function Contact() {
  return (
    <div
      className="contact d-flex flex-column justify-content-center align-items-center"
      id="contact"
    >
      <h1 className="contact__h1">CONTACT</h1>
      <ContactForm />
      <Footer />
    </div>
  );
}
