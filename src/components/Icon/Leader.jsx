import React from "react";

const Leader = ({ className, width, height, setIcon }) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      version="1.1"
      viewBox="0 0 128 128"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      onClick={() => setIcon("leader")}
    >
      <title>Leader icon</title>
      <defs>
        <linearGradient id="gradient" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#4cf3c6" />
          <stop offset="1" stopColor="#0aa2e7" />
        </linearGradient>
      </defs>
      <g>
        <polygon points="91,45 83,45 83,73 73,73 73,119 61,119 61,73 51,73 51,45 43,45 43,81 53,81 53,127 81,127 81,81 91,81  " />
        <path d="M53,15c0,7.7,6.3,14,14,14s14-6.3,14-14S74.7,1,67,1S53,7.3,53,15z M73,15c0,3.3-2.7,6-6,6s-6-2.7-6-6s2.7-6,6-6   S73,11.7,73,15z" />
        <path d="M19,25c0,7.7,6.3,14,14,14s14-6.3,14-14s-6.3-14-14-14S19,17.3,19,25z M39,25c0,3.3-2.7,6-6,6s-6-2.7-6-6s2.7-6,6-6   S39,21.7,39,25z" />
        <polygon points="113,83 103,83 103,119 87,119 87,127 111,127 111,91 121,91 121,51 113,51  " />
        <path d="M87,25c0,7.7,6.3,14,14,14s14-6.3,14-14s-6.3-14-14-14S87,17.3,87,25z M101,19c3.3,0,6,2.7,6,6s-2.7,6-6,6s-6-2.7-6-6   S97.7,19,101,19z" />
        <polygon points="31,83 21,83 21,51 13,51 13,91 23,91 23,127 47,127 47,119 31,119  " />
      </g>
    </svg>
  );
};

export { Leader };
