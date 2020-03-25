import React, {forwardRef} from 'react';

export default forwardRef(({ iconSize, stroke }, ref) =>
  <svg
    height={iconSize || 16}
    width={iconSize || 16}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      ref={ref}
      d="M18,7.23012082 L22.5,12.2103695 L18,17.1906182 M6,17.1906182 L1.5,12.2103695 L6,7.23012082 M14,3.5 L10,20.5 L14,3.5 Z"
      fill="none"
      stroke={stroke || '#37474f'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
    />
  </svg>
);
