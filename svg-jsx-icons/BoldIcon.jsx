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
      d="M13.5304282,11.3777778 L5,11.3777778 L13.5304282,11.3777778 Z M12.2452069,11.3777778 L13.7037037,11.3777778 C16.6287674,11.3777778 19,13.867572 19,16.9388889 C19,20.0102057 16.6287674,22.5 13.7037037,22.5 L5,22.5 L5,1.5 L12.2452069,1.5 C14.8429907,1.5 16.9489106,3.71121587 16.9489106,6.43888889 C16.9489106,9.1665619 14.8429907,11.3777778 12.2452069,11.3777778 L12.2452069,11.3777778 Z"
      fill="none"
      stroke={stroke || '#37474f'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
    />
  </svg>,
);
