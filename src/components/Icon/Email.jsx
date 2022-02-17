import React from "react";

const EmailIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-mail"
      width={44}
      height={44}
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="#9500ff"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <rect x={3} y={5} width={18} height={14} rx={2} />
      <polyline points="3 7 12 13 21 7" />
    </svg>
  );
};

export default EmailIcon;
