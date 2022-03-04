import React from "react";

const Bem = ({ className, width, height, setIcon }) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 256 212"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMinYMin meet"
      onClick={() => setIcon("bem")}
    >
      <title>BEM icon</title>
      <defs>
        <linearGradient id="gradient" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#4cf3c6" />
          <stop offset="1" stopColor="#0aa2e7" />
        </linearGradient>
      </defs>
      <path d="M0 32.692h59.85v17.603H0V32.692zM0 0h59.85v17.603H0V0zm107.38 65.132H0v17.603h103.356c11.316 0 37.72.251 47.528 16.094v-9.807c-4.778-15.592-18.86-23.89-43.505-23.89zm.25 32.691H0v17.603h103.356c25.147 0 40.99 1.006 47.528 4.527v-7.796c-5.03-12.322-26.153-14.334-43.253-14.334zm-.25 82.986H0v-17.603h103.356c11.316 0 37.72-.251 47.528-16.094v9.807c-4.778 15.592-18.86 23.89-43.505 23.89zm.25-32.691H0v-17.603h103.356c25.147 0 40.99-1.006 47.528-4.527v7.796c-5.03 12.322-26.153 14.334-43.253 14.334zm69.407 63.12H256v-10.814h-76.7c-6.79 0-22.883-.251-28.667-9.556v6.036c2.766 9.304 11.316 14.334 26.404 14.334zm-.251-19.867h78.963v-10.813H179.3c-15.34 0-24.896-.503-28.668-2.766v4.778c3.017 7.544 15.842 8.801 26.153 8.801z" />
    </svg>
  );
};

export { Bem };
