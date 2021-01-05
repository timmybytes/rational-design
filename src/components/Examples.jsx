import React from 'react';

const Examples = props => (
  <section className='examples'>
    {props.currentScale.map(scale => {
      return (
        <>
          <span className='examples__labels'>{scale}px</span>
          <p style={{ fontSize: `${+scale}px` }} className='examples__lines'>
            Before we knew it, we were jumping over quick foxes and lazy cows.
          </p>
        </>
      );
    })}
  </section>
);

export default Examples;
