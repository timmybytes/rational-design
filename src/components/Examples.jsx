import React from 'react';

const Examples = props => (
  <section
    className='examples'
    style={{ background: props.bgColor, color: props.textColor }}>
    {props.currentScale.map((scale, idx) => {
      return (
        <React.Fragment key={idx}>
          <span className='examples__labels'>{scale}px</span>
          <p style={{ fontSize: `${scale}px` }} className='examples__lines'>
            Before we knew it, we were jumping over quick foxes and lazy cows.
          </p>
        </React.Fragment>
      );
    })}
  </section>
);

export default Examples;
