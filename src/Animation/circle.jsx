"use client";
import React from "react";

const CircleTextIcon = ({
  text,
  icon: Icon,
  iconColor = "#0A66C2",
  iconSize = 20,
  url = "#",
}) => {
  return (
    <div className="circle relative w-[90px] h-[90px] p-0.5">
      <svg width="80" height="80" viewBox="0 0 100 100" className="block">
        <defs>
          <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff00cc" />
            <stop offset="100%" stopColor="#3333ff" />
          </linearGradient>
          <path
            id="circlePath"
            d="
              M 50, 50
              m -40, 0
              a 40,40 0 1,1 80,0
              a 40,40 0 1,1 -80,0
            "
          />
        </defs>

        <text
          fill="currentcolor" // you can switch to fill="url(#textGradient)" for gradient
          fontSize="15"
          fontWeight="bold"
          className="animate-rotateText origin-[50px_50px] text-gray-400"
        >
          <textPath href="#circlePath" startOffset="7%">
            {text}
          </textPath>
        </text>

        <foreignObject x="35" y="35" width="30" height="35">
          <a
            className="flex justify-center items-center h-[30px] cursor-pointer hover:scale-115"
            href={url}
            target="_blank"
          >
            <Icon style={{ color: iconColor, fontSize: iconSize }} />
          </a>
        </foreignObject>
      </svg>

      <style>
        {`
          @keyframes rotateText {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
          .animate-rotateText {
            animation: rotateText 10s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default CircleTextIcon;
