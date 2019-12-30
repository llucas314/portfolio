import React from "react";

function SvgDarkArrow(props) {
  return (
    <svg width={32} height={32} {...props}>
      <g data-name="Group 4" stroke="#1f2833" strokeWidth={3} fill="none">
        <path
          data-name="Path 3"
          d="M8.139 12.753l8.342 8.192 8.076-8.192"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
        <g data-name="Ellipse 1">
          <circle cx={16} cy={16} r={16} stroke="none" />
          <circle cx={16} cy={16} r={14.5} />
        </g>
      </g>
    </svg>
  );
}

export default SvgDarkArrow;
