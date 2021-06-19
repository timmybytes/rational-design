import React from 'react';

const Examples = ({ examples, colors }) => {
  return (
    <div
      className='examples'
      style={{ background: colors.background, color: colors.foreground }}>
      {examples.map((num, idx) => (
        <React.Fragment key={idx}>
          <span className='examples__labels'>{examples[idx]}px</span>
          <p className='examples__lines' style={{ fontSize: num }}>
            The quick brown fox jumps over the lazy dog.
          </p>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Examples;
