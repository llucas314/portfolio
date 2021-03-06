import React from "react";
import "./About.css";
import image from "../../assets/GA14Nov-WebSized_NoCrop-11.jpg";
import whatido from "../../assets/what-I-do.svg";
export default function About() {
  return (
    <div
      id="about"
      className="about d-flex flex-column  justify-content-center align-items-center"
    >
      <div className="container">
        <main className="row flex-column justify-content-center align-items-center about__main">
          <h1 className="about__h1 text-center">ABOUT ME</h1>
          <div className="about__bio d-flex flex-column flex-lg-row justify-content-center align-items-center col-lg-12">
            <img
              src={image}
              alt="profile"
              className="about__image rounded-circle m-3 m-lg-0 p-3"
            />
            <article>
              <p className="about__bio-text mb-1 mb-lg-3">
                A mentor told me the best things in life come from living
                outside of your comfort zone, and I have lived by that principle
                ever since. I left my friends and family, joined the Air Force,
                traveled the world, and even flew a fighter jet. Now, I have
                left the comfort of the military to pursue my dream of becoming
                a software developer. I faced many challenges along the way but
                my diverse background has given me an amazing set of skills that
                have prepared me to be flexible and thrive under pressure.
              </p>
              <p className="about__bio-text mb-0 mb-lg-3">
                Although I did not realize my passion for coding until later in
                life, I’ve always been a problem solver. If I was working on a
                jigsaw puzzle or diagnosing a computer issue, I strove for
                results. After I was introduced to programming, I knew that I
                had found a perfect career that I would thrive in. I am
                continuously pushing myself outside of my comfort zone to learn
                new languages and frameworks to become a versatile software
                engineer.
              </p>
            </article>
          </div>
        </main>
      </div>
      <img src={whatido} alt="background img" className="about__background" />
    </div>
  );
}
