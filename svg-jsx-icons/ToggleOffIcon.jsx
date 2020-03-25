import React, { forwardRef } from 'react';

export default forwardRef(({ iconSize, stroke }, ref) =>
  <svg
    height={iconSize || 16}
    width={iconSize || 16}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      ref={ref}
      d="M8.5,19 C4.63400675,19 1.5,15.8659932 1.5,12 C1.5,8.13400675 4.63400675,5 8.5,5 C12.3659932,5 15.5,8.13400675 15.5,12 C15.5,15.8659932 12.3659932,19 8.5,19 Z M14.6,8 L19,8 C20.9329966,8 22.5,9.790861 22.5,12 C22.5,14.209139 20.9329966,16 19,16 L14.6,16 L14.6,16"
      fill="none"
      stroke={stroke || '#37474f'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
    />
  </svg>,
);
