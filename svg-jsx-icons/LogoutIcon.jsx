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
      d="M22.5,22.5 L4.67266187,22.5 C2.9204491,22.5 1.5,21.089697 1.5,19.35 L1.5,4.65 C1.5,2.91030304 2.9204491,1.5 4.67266187,1.5 L22.5,1.5 L22.5,1.5 M22.275,12 L8,12 L22.275,12 Z M14.4,17.5 L22.275,12 L14.4,6.5"
      fill="none"
      stroke={stroke || '#37474f'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
    />
  </svg>,
);
