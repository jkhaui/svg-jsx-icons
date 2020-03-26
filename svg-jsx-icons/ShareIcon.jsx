import React, {forwardRef} from 'react';

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
      d="M7.20328856,14.5532886 C5.89858241,15.8579947 3.78323577,15.8579947 2.47852962,14.5532886 C1.17382346,13.2485824 1.17382346,11.1332358 2.47852962,9.82852962 C3.78323577,8.52382346 5.89858241,8.52382346 7.20328856,9.82852962 C8.50799472,11.1332358 8.50799472,13.2485824 7.20328856,14.5532886 Z M19.1590909,22.5 C17.3139578,22.5 15.8181818,21.0042241 15.8181818,19.1590909 C15.8181818,17.3139578 17.3139578,15.8181818 19.1590909,15.8181818 C21.0042241,15.8181818 22.5,17.3139578 22.5,19.1590909 C22.5,21.0042241 21.0042241,22.5 19.1590909,22.5 Z M19.1590909,8.18181818 C17.3139578,8.18181818 15.8181818,6.68604223 15.8181818,4.84090909 C15.8181818,2.99577595 17.3139578,1.5 19.1590909,1.5 C21.0042241,1.5 22.5,2.99577595 22.5,4.84090909 C22.5,6.68604223 21.0042241,8.18181818 19.1590909,8.18181818 Z M8.00502075,13.3959316 L16.1775303,17.6185583 L8.00502075,13.3959316 Z M16.1122768,6.41325439 L7.9119929,10.6451101 L16.1122768,6.41325439 Z"
      fill="none"
      stroke={stroke || '#37474f'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.5"
    />
  </svg>
);
