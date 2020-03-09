import React from 'react';

export default ({ iconSize, stroke }) =>
  <svg
    height={iconSize || 16}
    width={iconSize || 16}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12,22 C16.8900212,22 20.5,18.0412546 20.5,13.1578947 C20.5,9.90232147 17.6666667,6.18302323 12,2 C6.33333333,6.18302323 3.5,9.90232147 3.5,13.1578947 C3.5,18.0412546 7.10997878,22 12,22 Z M8,14.5737316 C8.25,15.9177088 9.45872382,17.25 10.9030657,17.6928068"
      fill="none"
      stroke={stroke || '#37474f'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
    />
  </svg>;
