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
      d="M13.8419475,4.81677591 L21.0976471,4.81677591 C21.3198605,4.81677591 21.5,4.99569227 21.5,5.21639679 L21.5,14.9072032 C21.5,15.1279077 21.3198605,15.3068241 21.0976471,15.3068241 L13.8419475,15.3068241 C12,15.3068241 12,12.0099518 9.26406271,12.0099518 L2.5,12.0099518 L2.5,1.51990362 C5.06021868,1.49336546 7.27956952,1.49336546 9.15805251,1.51990362 C11.975777,1.55971085 12,4.81677591 13.8419475,4.81677591 Z M2.5,1.51990362 L2.5,22.5 L2.5,1.51990362 Z"
      fill="none"
      stroke={stroke || '#37474f'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
    />
  </svg>,
);
