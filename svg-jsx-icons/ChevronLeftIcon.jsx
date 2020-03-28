import React, { forwardRef } from 'react';

export default forwardRef(({ iconSize, stroke, ...rest }, ref) =>
  <svg
    width={iconSize}
    height={iconSize}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <polyline
      ref={ref}
      fill="none"
      points="17.5 22 6.5 12 17.5 2"
      stroke={stroke || '#37474f'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
    />
  </svg>,
);
