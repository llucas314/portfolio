import React from "react";
import "./About.css";
import image from "../../assets/GA14Nov-WebSized_NoCrop-11.jpg";
import desktop from "../../assets/desktop.png";
import mobile from "../../assets/mobile.png";
import website from "../../assets/website.png";
import borderDesign from "../../assets/backgroundImage.png";
export default function About() {
  return (
    <div
      id="about"
      className="about d-flex flex-lg-row justify-content-center align-items-center"
    >
      <div className="container">
        <main className="row flex-column justify-content-center align-items-center about__main">
          <h1 className="about__h1 text-center">ABOUT ME</h1>
          <div className="about__bio d-flex flex-column flex-lg-row justify-content-center align-items-center col-lg-12">
            <img
              src={image}
              alt="profile"
              className="about__image rounded-circle p-3"
            />
            <p className="about__bio-text text-center mb-3">
              Give it up for my sister! All right now. Everybody put your hands
              together. Do we have any single ladies in the house tonight? sing
              All the single ladies All the single ladies. Now put your hands
              up. Up in the club. Just broke up. I’m doing my own littl
            </p>
          </div>
        </main>
      </div>
      <div
        className="about__footer d-flex flex-column justify-content-start align-items-center"
        style={{ backgroundImage: `url(${borderDesign})` }}
      >
        <h3 className="about__h3 text-center">WHAT I DO</h3>
        <div className="about__icons d-flex justify-content-between">
          <div className="about__icon-container  d-flex flex-column align-items-center justify-content-center">
            <img src={desktop} alt="icon" id="desktop" />
            <p className="about__icon-description text-center m-0">
              Desktop Apps
            </p>
          </div>
          <div className="about__icon-container  d-flex flex-column align-items-center justify-content-center ">
            <img src={mobile} alt="icon" id="mobile" />
            <p className="about__icon-description text-center m-0">
              Mobile Apps
            </p>
          </div>
          <div className="about__icon-container d-flex flex-column align-items-center justify-content-center">
            <img src={website} alt="icon" id="website" />
            <p className="about__icon-description text-center m-0">Websites</p>
          </div>
        </div>
      </div>
    </div>
  );
}
