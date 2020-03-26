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
      d="M3.92316077,14.7784759 L2.19413226,14.2230002 C1.78050729,14.0901171 1.5,13.7053724 1.5,13.2709262 L1.5,10.7290738 C1.5,10.2946276 1.78050729,9.90988292 2.19413226,9.77699983 L3.92316077,9.22152407 C4.44897673,9.05259798 4.73829314,8.48939827 4.56936705,7.96358231 C4.53552025,7.85822744 4.4844214,7.75922103 4.41815359,7.67059918 L3.6797931,6.68316837 C3.38210119,6.28505639 3.42204039,5.72871721 3.77354687,5.37721072 L5.37721072,3.77354687 C5.72871721,3.42204039 6.28505639,3.38210119 6.68316837,3.6797931 L7.67059918,4.41815359 C8.11290226,4.7488898 8.73957441,4.65844698 9.07031061,4.21614391 C9.13657842,4.12752206 9.18767727,4.02851564 9.22152407,3.92316077 L9.77699983,2.19413226 C9.90988292,1.78050729 10.2946276,1.5 10.7290738,1.5 L13.2709262,1.5 C13.7053724,1.5 14.0901171,1.78050729 14.2230002,2.19413226 L14.7784759,3.92316077 C14.947402,4.44897673 15.5106017,4.73829314 16.0364177,4.56936705 C16.1417726,4.53552025 16.240779,4.4844214 16.3294008,4.41815359 L17.3168316,3.6797931 C17.7149436,3.38210119 18.2712828,3.42204039 18.6227893,3.77354687 L20.2264531,5.37721072 C20.5779596,5.72871721 20.6178988,6.28505639 20.3202069,6.68316837 L19.5818464,7.67059918 C19.2511102,8.11290226 19.341553,8.73957441 19.7838561,9.07031061 C19.8724779,9.13657842 19.9714844,9.18767727 20.0768392,9.22152407 L21.8058677,9.77699983 C22.2194927,9.90988292 22.5,10.2946276 22.5,10.7290738 L22.5,13.2709262 C22.5,13.7053724 22.2194927,14.0901171 21.8058677,14.2230002 L20.0768392,14.7784759 C19.5510233,14.947402 19.2617069,15.5106017 19.430633,16.0364177 C19.4644797,16.1417726 19.5155786,16.240779 19.5818464,16.3294008 L20.3202069,17.3168316 C20.6178988,17.7149436 20.5779596,18.2712828 20.2264531,18.6227893 L18.6227893,20.2264531 C18.2712828,20.5779596 17.7149436,20.6178988 17.3168316,20.3202069 L16.3294008,19.5818464 C15.8870977,19.2511102 15.2604256,19.341553 14.9296894,19.7838561 C14.8634216,19.8724779 14.8123227,19.9714844 14.7784759,20.0768392 L14.2230002,21.8058677 C14.0901171,22.2194927 13.7053724,22.5 13.2709262,22.5 L10.7290738,22.5 C10.2946276,22.5 9.90988292,22.2194927 9.77699983,21.8058677 L9.22152407,20.0768392 C9.05259798,19.5510233 8.48939827,19.2617069 7.96358231,19.430633 C7.85822744,19.4644797 7.75922103,19.5155786 7.67059918,19.5818464 L6.68316837,20.3202069 C6.28505639,20.6178988 5.72871721,20.5779596 5.37721072,20.2264531 L3.77354687,18.6227893 C3.42204039,18.2712828 3.38210119,17.7149436 3.6797931,17.3168316 L4.41815359,16.3294008 C4.7488898,15.8870977 4.65844698,15.2604256 4.21614391,14.9296894 C4.12752206,14.8634216 4.02851564,14.8123227 3.92316077,14.7784759 Z M14.1213203,9.87867966 C12.9497475,8.70710678 11.0502525,8.70710678 9.87867966,9.87867966 C8.70710678,11.0502525 8.70710678,12.9497475 9.87867966,14.1213203 C11.0502525,15.2928932 12.9497475,15.2928932 14.1213203,14.1213203 C15.2928932,12.9497475 15.2928932,11.0502525 14.1213203,9.87867966 Z"
      fill="none"
      stroke={stroke || '#37474f'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
    />
  </svg>,
);
