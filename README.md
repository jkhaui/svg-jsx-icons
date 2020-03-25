# svg-jsx-icons
A small icon pack as configurable SVGs in JSX.

Easily themeable to seamlessly integrate with any project. Just download the zip and import the icons you need.

All icons accept 2 props: `iconSize` and `stroke` (for the colour of the icon). Props default to `16` and `'#37474f'` respectively if nothing is passed to the icon component.

Additionally, a ref can be passed directly from the parent component to the
 icon. The ref is attached to the path node of the svg, making it easily
  manipulated by animation libraries such as GSAP.