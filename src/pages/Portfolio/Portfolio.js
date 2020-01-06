import React from "react";
import "./Portfolio.css";
import Project from "../../components/Project/Project";
import calluna from "../../assets/calluna.png";
import cove from "../../assets/music-cove.png";
import superBowl from "../../assets/super-bowl.png";
import doggy from "../../assets/doggy-styles.png";
import simon from "../../assets/simon.png";
import national from "../../assets/parks.png";
import storybook from "../../assets/storybook.png";
import cotripper from "../../assets/cotripper.png";
import isejingu from "../../assets/isejingu.png";
export default function Portfolio() {
  return (
    <div
      className="portfolio d-flex flex-column justify-content-center align-items-center my-lg-5"
      id="portfolio"
    >
      <h1 className="portfolio__h1 p-5 mt-lg-5">PORTFOLIO</h1>
      <div className="container ">
        <div className="row justify-content-center">
          <div className=" col-11 col-lg-12 d-flex flex-column flex-lg-row">
            <Project
              title="Ise Jingu"
              img={isejingu}
              description="Spaced Repeition Learning App to teach people to become developers, and teach developers how to become master developers."
              lang="React.JS | CSS | Node.JS | Express.JS | Neo4j "
              link="https://ise-jingu.io/"
            />
            <Project
              title="Super Bowl Center"
              img={superBowl}
              description="A place to find information on the NFL’s largest game of the year."
              lang="Mongo DB | Express.JS | React.JS | Node.JS (MERN)"
              link="https://eager-raman-2f4f42.netlify.com/"
              github="https://github.com/llucas314/super-bowl-react"
            />

            <Project
              title="Cotripper"
              img={cotripper}
              description="Tourism website dedicated to helping single mothers travel."
              lang="React.JS | Jest | Django | PostgreSQL"
              github="https://github.com/CotripperPlatform/CoTrip"
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className=" col-11 col-lg-12 d-flex flex-column flex-lg-row">
            <Project
              title="The Calluna"
              img={calluna}
              description="A mockup of a luxury hotel's webpage."
              lang="HTML | CSS "
              link="https://llucas314.github.io/Website-Mockup/"
              github="https://github.com/llucas314/Website-Mockup"
            />
            <Project
              title="The Music Cove"
              img={cove}
              description="A web site that searches Spotify’s API for artists’ info."
              lang="Javascript | HTML | CSS"
              link="https://llucas314.github.io/ui-pattern-project/"
              github="https://github.com/llucas314/ui-pattern-project"
            />
            <Project
              title="Doggy Styles"
              img={doggy}
              description="This site allows you to find compatible dogs by their temperaments or styles."
              lang="Mongo DB | Express.JS | React.JS | Node.JS (MERN)"
              link="https://practical-roentgen-4bb960.netlify.com/"
              github="https://github.com/llucas314/doggy-styles-react"
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className=" col-11 col-lg-12 d-flex flex-column flex-lg-row">
            <Project
              title="Simon"
              img={simon}
              description="A take on the classic Hasbro game Simon"
              lang="Javascript | HTML | CSS"
              link="https://llucas314.github.io/simon-game/"
              github="https://github.com/llucas314/simon-game"
            />

            <Project
              title="Component Library"
              img={storybook}
              description="A collection of React UI components hosted on storybook."
              lang="React.JS | CSS"
              link="https://trusting-shirley-06f0a4.netlify.com/"
              github="https://github.com/llucas314/component-library"
            />
            <Project
              title="National Parks"
              img={national}
              description="A guide to National Parks in America."
              lang="React.JS | CSS"
              link="https://zealous-villani-add409.netlify.com/"
              github="https://github.com/llucas314/National-Parks"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
