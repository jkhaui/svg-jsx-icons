import React from 'react';

export default ({ iconSize, stroke }) =>
  <svg
    width={iconSize || 16}
    height={iconSize || 16}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.5,12 L22.5,12"
      fill="none"
      stroke={stroke || '#37474f'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
    />
  </svg>;
