import React from "react";
import "./Footer.css";
import { GithubBrands, LinkedinInBrands } from "../../Icons";
import { motion } from "framer-motion";
import resume from "../../assets/FebResume.pdf";

export default function Footer() {
  return (
    <footer className="footer d-flex flex-column justify-content-center align-items-center align-self-end">
      <div className="footer__links d-flex justify-content-center align-items-center">
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
          <a
            href="https://github.com/llucas314"
            target="_blank"
            rel="noopener noreferrer"
            className="m-2"
          >
            <GithubBrands width={"32px"} height={"32px"} fill={"#ffffff"} />
          </a>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
          <a
            href="https://www.linkedin.com/in/lorenzo-lucas-0314/"
            target="_blank"
            rel="noopener noreferrer"
            className="m-2"
          >
            <LinkedinInBrands width={"32px"} height={"32px"} fill={"#ffffff"} />
          </a>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
          <a
            href={resume}
            download
            className="footer__resume btn btn-outline-info m-2"
          >
            Resume
          </a>
        </motion.div>
      </div>
      <p className="footer__p">LORENZO LUCAS ©2020</p>
    </footer>
  );
}
