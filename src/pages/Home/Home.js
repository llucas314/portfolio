import React from "react";
import "./Home.css";
import { Link } from "react-scroll";
import { ButtonIcon } from "../../Icons";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <main
      id="home"
      className="home d-flex flex-column justify-content-center align-content-center"
    >
      <div className="container ">
        <div className="row flex-column justify-content-center align-items-center">
          <h1 className="home__h1 text-center">LORENZO LUCAS</h1>
          <p className="home__p text-center">Software Engineer</p>
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="home__button"
            >
              <ButtonIcon />
            </Link>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
