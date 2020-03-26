import React, { forwardRef } from 'react';

export default forwardRef(({ iconSize, stroke, ...rest }, ref) =>
  <svg
    height={iconSize || 16}
    width={iconSize || 16}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      ref={ref}
      d="M6.5,19 L22.5,19 L6.5,19 Z M6.5,5 L22.5,5 L6.5,5 Z M6.5,12 L22.5,12 L6.5,12 Z M1.5,19 L2,19 L1.5,19 Z M1.5,5 L2,5 L1.5,5 Z M1.5,12 L2,12 L1.5,12 Z"
      fill="none"
      stroke={stroke || '#37474f'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
    />
  </svg>,
);
