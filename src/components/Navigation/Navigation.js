import React, { useState, useEffect, useRef } from "react";
import "./Navigation.css";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";

const Navigation = props => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const element = useRef(null);
  useEffect(() => {
    const updateOpacity = () => {
      element.current.style.opacity = Math.min(window.scrollY / 100, 1);
    };
    window.addEventListener("scroll", updateOpacity);
    return () => {
      window.removeEventListener("scroll", updateOpacity);
    };
  });
  return (
    <div ref={element} style={{ opacity: 0 }}>
      <Navbar
        color="light"
        light
        expand="md"
        className="navigation container-fluid"
      >
        <NavbarBrand href="/">Lorenzo Lucas</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="justify-content-center" navbar>
            <NavItem>
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className="nav-item nav-link"
              >
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className="nav-item nav-link"
              >
                About
              </Link>
            </NavItem>
            <NavItem>
              <Link
                activeClass="active"
                to="portfolio"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className="nav-item nav-link"
              >
                Portfolio
              </Link>
            </NavItem>
            <NavItem>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className="nav-item nav-link"
              >
                Contact
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
