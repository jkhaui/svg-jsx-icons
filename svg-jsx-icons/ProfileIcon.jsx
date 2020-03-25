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
      d="M12,14.5 C8.6862915,14.5 6,11.5898509 6,8 C6,4.41014913 8.6862915,1.5 12,1.5 C15.3137085,1.5 18,4.41014913 18,8 C18,11.5898509 15.3137085,14.5 12,14.5 Z M12,14.5 C18,14.5 21.5,17.1666667 22.5,22.5 L1.5,22.5 C2.5,17.1666667 6,14.5 12,14.5 Z"
      fill="none"
      stroke={stroke || '#37474f'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
    />
  </svg>,
);
