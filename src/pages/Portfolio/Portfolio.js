import React from "react";
import "./Portfolio.css";
import Project from "../../components/Project/Project";
import calluna from "../../assets/calluna.png";
import cove from "../../assets/music-cove.png";
import superBowl from "../../assets/super-bowl.png";
import doggy from "../../assets/doggy-styles.png";
import simon from "../../assets/simon.png";
import national from "../../assets/parks.png";

export default function Portfolio() {
  return (
    <div
      className="portfolio d-flex flex-column justify-content-center align-items-center"
      id="portfolio"
    >
      <h1 className="portfolio__h1 p-5 ">PORTFOLIO</h1>
      <div className="container">
        <div className="row justify-content-center">
          <div className=" col-11 col-lg-12 d-flex flex-column flex-lg-row">
            <Project
              title="The Calluna"
              img={calluna}
              description="A mockup of a luxury hotel's webpage. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. U"
              link="https://llucas314.github.io/Website-Mockup/"
              github="https://github.com/llucas314/Website-Mockup"
            />
            <Project
              title="The Music Cove"
              img={cove}
              description="A web site that searches Spotify’s API for artists’ info."
              link="https://llucas314.github.io/ui-pattern-project/"
              github="https://github.com/llucas314/ui-pattern-project"
            />
            <Project
              title="Super Bowl Center"
              img={superBowl}
              description="A place to find information on the NFL’s largest game of the year."
              link="https://eager-raman-2f4f42.netlify.com/"
              github="https://github.com/llucas314/super-bowl-react"
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className=" col-11 col-lg-12 d-flex flex-column flex-lg-row">
            <Project
              title="Simon"
              img={simon}
              description="A take on the classic Hasbro game Simon."
              link="https://llucas314.github.io/simon-game/"
              github="https://github.com/llucas314/simon-game"
            />
            <Project
              title="Doggy Styles"
              img={doggy}
              description="This site allows you to find compatile dogs by their temperaments or styles."
              link="https://practical-roentgen-4bb960.netlify.com/"
              github="https://github.com/llucas314/doggy-styles-react"
            />
            <Project
              title="National Parks"
              img={national}
              description="A guide to National Parks in America."
              link="https://zealous-villani-add409.netlify.com/"
              github="https://github.com/llucas314/National-Parks"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
