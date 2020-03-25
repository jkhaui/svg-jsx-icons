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
      d="M3.6,22 C2.44020203,22 1.5,21.0050772 1.5,19.7777778 L1.5,4.22222222 C1.5,2.99492278 2.44020203,2 3.6,2 L20.4,2 C21.559798,2 22.5,2.99492278 22.5,4.22222222 L22.5,19.7777778 C22.5,21.0050772 21.559798,22 20.4,22 L3.6,22 Z M17.5,21 L8.31818182,7 L1.5,17.75 M22.5,17.75 L17.3196459,11 L13.75,15.25"
      fill="none"
      stroke={stroke || '#37474f'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
    />
  </svg>,
);
