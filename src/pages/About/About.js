import React from "react";
import "./About.css";
import image from "../../assets/GA14Nov-WebSized_NoCrop-11.jpg";
import { BorderDesign } from "../../Icons";
import borderDesign from "../../assets/borderDesign.svg";
export default function About() {
  return (
    <div
      id="about"
      className="about d-flex flex-lg-row justify-content-center align-items-center"
    >
      <div className="container">
        <div className="row flex-column justify-content-center align-items-center">
          <h1 className="about__h1 text-center">ABOUT ME</h1>
          <div className="about__bio d-flex flex-column flex-lg-row justify-content-center align-items-center col-lg-12">
            <img
              src={image}
              alt="profile"
              className="about__image rounded-circle p-3"
            />
            <p className="about__bio-text text-center">
              Give it up for my sister! All right now. Everybody put your hands
              together. Do we have any single ladies in the house tonight? sing
              All the single ladies All the single ladies. Now put your hands
              up. Up in the club. Just broke up. I’m doing my own littl
            </p>
          </div>
        </div>
      </div>
      <div
        className="about__footer "
        // style={{ backgroundImage: `url(${borderDesign})` }}
      >
        <BorderDesign width={"100vw"} height={"auto"} />
        <h3 className="about__h3">What I Do</h3>
        <div className="about__icons"></div>
      </div>
    </div>
  );
}
