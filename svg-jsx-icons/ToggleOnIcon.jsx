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
      d="M15.5,19 C19.3659932,19 22.5,15.8659932 22.5,12 C22.5,8.13400675 19.3659932,5 15.5,5 C11.6340068,5 8.5,8.13400675 8.5,12 C8.5,15.8659932 11.6340068,19 15.5,19 Z M9.4,16 L5,16 C3.06700338,16 1.5,14.209139 1.5,12 C1.5,9.790861 3.06700338,8 5,8 L9.4,8"
      fill="none"
      stroke={stroke || '#37474f'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
    />
  </svg>,
);
