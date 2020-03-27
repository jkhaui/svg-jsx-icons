import React, { forwardRef } from 'react';

export default forwardRef(({ iconSize, stroke, ...rest }, ref) =>
  <svg
    height={iconSize}
    viewBox="0 0 24 24"
    width={iconSize}
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      ref={ref}
      d="M2,13.5 C2,12.1666667 2,6.16666667 2,3.5 C2,2.3954305 2.97683327,1.5 4.18181818,1.5 C7.09090909,1.5 12.5454545,1.5 14,1.5 M6,5.5 L6,22.5 L22,22.5 L22,12.1818182 L16,5.5 L6,5.5 Z"
      fill="none"
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
    />
  </svg>,
);
