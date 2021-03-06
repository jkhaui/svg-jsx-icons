import React, { forwardRef } from 'react';

export default forwardRef(({ iconSize, stroke, ...rest }, ref) =>
  <svg
    height={iconSize || 16}
    width={iconSize || 16}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      ref={ref}
      d="M15.7333333,18.527027 C15.7333333,17.7702703 15.9111111,16.9945946 16.2666667,16.2 C18.7555556,13.697698 20,11.4567335 20,9.47710652 C20,5.07147224 16.418278,1.5 12,1.5 C7.581722,1.5 4,5.07147224 4,9.47710652 C4,11.4443213 5.24444444,13.6852858 7.73333333,16.2 C8.08888889,16.9945946 8.26666667,17.7702703 8.26666667,18.527027 C8.26666667,19.6621622 8.57142857,22.5 12,22.5 C15.4285714,22.5 15.7333333,19.6621622 15.7333333,18.527027 Z M8.26666667,17 L15.75,17"
      fill="none"
      stroke={stroke || '#37474f'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.5"
    />
  </svg>,
);
