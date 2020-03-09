import React from 'react';

export default ({ iconSize, stroke }) =>
  <svg
    height={iconSize || 16}
    width={iconSize || 16}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.65909091,4.27272727 L12,1.5 L15.3409091,4.27272727 M15.3409091,19.7272727 L12,22.5 L8.65909091,19.7272727 M4.27272727,15.3409091 L1.5,12 L4.27272727,8.65909091 M19.7272727,8.65909091 L22.5,12 L19.7272727,15.3409091"
      fill="none"
      stroke={stroke || '#37474f'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.5"
    />
  </svg>;
