import React, { forwardRef } from 'react';

export default forwardRef(({ iconSize, stroke }, ref) =>
  <svg
    viewBox="0 0 24 24"
    height={iconSize || 16}
    width={iconSize || 16}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      ref={ref}
      d="M12,14.5 C15.3137085,14.5 18,11.5898509 18,8 C18,4.41014913 15.3137085,1.5 12,1.5 C8.6862915,1.5 6,4.41014913 6,8 C6,11.5898509 8.6862915,14.5 12,14.5 Z M10,22.5 C7.66666667,22.5 4.83333333,22.5 1.5,22.5 C2.5,17.1666667 6,14.5 12,14.5 M12.5,18.2586617 L16.25,22.5 L22.5,14.25"
      fill="none"
      stroke={stroke || '#37474f'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
    />
  </svg>,
);
