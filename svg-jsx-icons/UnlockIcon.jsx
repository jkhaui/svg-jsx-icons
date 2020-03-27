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
      d="M6.375,8.375 L5.25,8.375 C4.0125,8.375 3,9.3875 3,10.625 L3,20.25 C3,21.4875 4.0125,22.5 5.25,22.5 L18.75,22.5 C19.9875,22.5 21,21.4875 21,20.25 L21,10.625 C21,9.3875 19.9875,8.375 18.75,8.375 L17.625,8.375 L17.625,6.125 C17.625,3.02 15.105,1.5 12,1.5 C10.85961,1.5 9.79813131,1.77248054 8.91142818,2.271119 M12,17.9375 C10.7625,17.9375 9.75,16.925 9.75,15.6875 C9.75,14.45 10.7625,13.4375 12,13.4375 C13.2375,13.4375 14.25,14.45 14.25,15.6875 C14.25,16.925 13.2375,17.9375 12,17.9375 Z M17.7375,8.375 L6.2625,8.375 L17.7375,8.375 Z"
      fill="none"
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
    />
  </svg>,
);
