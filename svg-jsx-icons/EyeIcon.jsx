import React from 'react';

export default ({ iconSize, stroke }) =>
  <svg
    height={iconSize || 16}
    width={iconSize || 16}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12,21 C16.562963,21 20.062963,18 22.5,12 C20.062963,6 16.562963,3 12,3 C7.43703704,3 3.93703704,6 1.5,12 C3.93703704,18 7.43703704,21 12,21 Z M12,16.5 C9.525,16.5 7.5,14.475 7.5,12 C7.5,9.525 9.525,7.5 12,7.5 C14.475,7.5 16.5,9.525 16.5,12 C16.5,14.475 14.475,16.5 12,16.5 Z"
      fill="none"
      stroke={stroke || '#37474f'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
    />
  </svg>;