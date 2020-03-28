import React, { forwardRef } from 'react';

export default forwardRef(({ iconSize, stroke, ...rest }, ref) =>
  <svg
    height={iconSize}
    width={iconSize}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <polyline
      ref={ref}
      fill="none"
      stroke={stroke || '#37474f'}
      points="6.5 2 17.5 12 6.5 22"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
    />
  </svg>,
);
