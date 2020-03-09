import React from 'react';

export default ({ iconSize, stroke }) =>
  <svg
    height={iconSize || 16}
    width={iconSize || 16}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.625,1.5 L15.375,1.5 L15.375,9.5 L21,9.5 L12,18.75 L3,9.5 L8.625,9.5 L8.625,1.5 Z M2,22.5 L22,22.5 L2,22.5 Z"
      fill="none"
      stroke={stroke || '#37474f'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
    />
  </svg>;
