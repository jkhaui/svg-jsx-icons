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
      d="M18.4162529,18.4188767 C16.5823507,20.1396256 14.4435997,21 12,21 C7.43703704,21 3.93703704,18 1.5,12 C3.93703704,6 7.43703704,3 12,3 C16.562963,3 20.062963,6 22.5,12 C22.2280876,12.6694499 21.9429425,13.3015529 21.6445645,13.8963089 M15.1310582,15.2245148 L8.81644439,8.82731477 C8.00400345,9.64249843 7.5,10.7652488 7.5,12 C7.5,14.475 9.525,16.5 12,16.5 C13.2138666,16.5 14.3194892,16.0129018 15.1310582,15.2245148 Z M2,2 L22,22 L2,2 Z"
      fill="none"
      stroke={stroke || '#37474f'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
    />
  </svg>
);
