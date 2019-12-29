import React from "react";
import "./Footer.css";
import { GithubBrands, LinkedinInBrands } from "../../Icons";

export default function Footer() {
  return (
    <footer className="footer d-flex flex-column justify-content-center align-items-center align-self-end">
      <div className="footer__links d-flex justify-content-center align-items-center">
        <a
          href="https://github.com/llucas314"
          target="_blank"
          rel="noopener noreferrer"
          className="m-2"
        >
          <GithubBrands width={"32px"} height={"32px"} fill={"#ffffff"} />
        </a>
        <a
          href="https://www.linkedin.com/in/lorenzo-lucas-0314/"
          target="_blank"
          rel="noopener noreferrer"
          className="m-2"
        >
          <LinkedinInBrands width={"32px"} height={"32px"} fill={"#ffffff"} />
        </a>
      </div>
      <p className="footer__p">LORENZO LUCAS ©2020</p>
    </footer>
  );
}
