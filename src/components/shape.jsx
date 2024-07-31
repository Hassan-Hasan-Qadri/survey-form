import React, { useRef, useEffect } from 'react';
import Vivus from 'vivus';

function Shape({path,strokeColor,stopColor,id}) {
  const svgRef = useRef(null);

  useEffect(() => {
    new Vivus(svgRef.current, { duration: 120, type: 'oneByOne' });
  }, []);

  return (
    <>
    {console.log(stopColor,id)}
    <svg className='shape' ref={svgRef} width="100" height="100" viewBox="0 0 100 100">
        <linearGradient id={id}>
        <stop offset="0" stop-color={stopColor}>
            <animate
                dur="1s"
                attributeName="offset"
                fill="freeze"
                begin="2s"
                from="0"
                to="1"
            />
        </stop>
        <stop offset="0" stop-color="transparent">
            <animate
                dur="1s"
                attributeName="offset"
                fill="freeze"
                begin="2s"
                from="0"
                to="1"
            />
        </stop>
    </linearGradient>
      <g stroke= {strokeColor} stroke-width="1" fill={"url(#"+id+")"}>
        {path}
        
      </g>
      
    </svg>
    </>
  );
}

export default Shape;
