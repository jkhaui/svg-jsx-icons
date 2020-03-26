import React, { forwardRef } from 'react';

export default forwardRef(({ iconSize, stroke, ...rest }, ref) =>
  <svg
    viewBox="0 0 24 24"
    height={iconSize || 16}
    width={iconSize || 16}
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      ref={ref}
      d="M4,7.75 L20,7.75 L20,20.5 C20,21.6045695 19.1045695,22.5 18,22.5 L6,22.5 C4.8954305,22.5 4,21.6045695 4,20.5 L4,7.75 Z M16,4 L21,4 L3,4 L8,4 L8.70498275,2.14478224 C8.8524847,1.7566192 9.22452258,1.5 9.63976633,1.5 L14.3602337,1.5 C14.7754774,1.5 15.1475153,1.7566192 15.2950173,2.14478224 L16,4 Z"
      fill="none"
      stroke={stroke || '#37474f'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
    />
  </svg>,
);
