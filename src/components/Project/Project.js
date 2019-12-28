import React from "react";
import "./Project.css";
import styled, { keyframes } from "styled-components";
import slideInDown from "react-animations";

export default function Project(props) {
  const SlideInDownAnimation = keyframes`${slideInDown}`;
  const SlideInDownDiv = styled.div`
    animation: infinite 5s ${SlideInDownAnimation};
  `;
  return (
    <div className="project">
      <img src={props.img} alt={props.title} />
      <SlideInDownDiv>Hi</SlideInDownDiv>
    </div>
  );
}
