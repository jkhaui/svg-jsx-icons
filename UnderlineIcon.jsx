import React from 'react';

export default ({ iconSize, stroke }) =>
  <svg
    height={iconSize || 16}
    width={iconSize || 16}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3,22.5 L21,22.5 L3,22.5 Z M19.5,1.5 L19.5,11.0625 C19.5,15.1701178 16.1421356,18.5 12,18.5 C7.85786438,18.5 4.5,15.1701178 4.5,11.0625 L4.5,1.5"
      fill="none"
      stroke={stroke || '#37474f'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
    />
  </svg>;
