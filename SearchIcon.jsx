import React from 'react';

export default ({ iconSize, stroke }) =>
  <svg
    height={iconSize || 16}
    width={iconSize || 16}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.2,16.2 L22.5,22.5 L16.2,16.2 Z M9.9,18.3 C5.2608081,18.3 1.5,14.5391919 1.5,9.9 C1.5,5.2608081 5.2608081,1.5 9.9,1.5 C14.5391919,1.5 18.3,5.2608081 18.3,9.9 C18.3,14.5391919 14.5391919,18.3 9.9,18.3 Z"
      fill="none"
      stroke={stroke || '#37474f'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
    />
  </svg>;
