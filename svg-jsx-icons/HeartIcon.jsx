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
      d="M20.8337698,4.7281998 C17.8575929,0.411358956 12.000395,2.95856318 12.000395,7.34243572 C12.000395,2.95856318 6.14282216,0.411149482 3.1662234,4.7281998 C0.0898281241,9.19114879 3.12202043,17.0090862 12.0002075,21.5 C20.8779727,17.0090862 23.910165,9.19114879 20.8337698,4.7281998 Z"
      fill="none"
      stroke={stroke || '#37474f'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
    />
  </svg>,
);
