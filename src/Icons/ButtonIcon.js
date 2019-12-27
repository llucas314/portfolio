import React from "react";

function SvgButtonIcon(props) {
  return (
    <svg width={54} height={54} {...props}>
      <g data-name="Group 4" stroke="#66fcf1" strokeWidth={3} fill="none">
        <path
          data-name="Path 3"
          d="M13.633 21.364l13.974 13.722 13.526-13.722"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
        <g data-name="Ellipse 1">
          <circle cx={27} cy={27} r={27} stroke="none" />
          <circle cx={27} cy={27} r={25.5} />
        </g>
      </g>
    </svg>
  );
}

export default SvgButtonIcon;
