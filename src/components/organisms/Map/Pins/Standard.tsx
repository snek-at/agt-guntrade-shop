import React, {useState} from "react";

/*
This is what a standard Pin looks like
More of these can be created which can be what ever format is prefered (Image, SVG, etc)
*/

const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`;

export default function Pin() {
  const [height, setHeight] = useState(20);
  const [offset, setOffset] = useState(20);

  const pinStyle = {
    cursor: 'pointer',
    fill: 'black',
    stroke: 'none',
    transform: `translate(${-offset/2}px,${-offset}px)`
  };

  function MouseEnter() {
    setHeight(25);
    setOffset(26);
  }

  function MouseLeave() {
    setHeight(20);
    setOffset(20);
  }

  return (
      <svg
      onMouseEnter={() => MouseEnter()}
      onMouseLeave={() => MouseLeave()}
      height={height}
      viewBox="0 0 24 24"
      style={{...pinStyle}}>
          <path d={ICON}/>
      </svg>
  );
}