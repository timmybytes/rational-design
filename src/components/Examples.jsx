import React from 'react';

const Examples = ({ settings: { ratio, baseSize, scale, sizes }, colors }) => {
  function calculateScale(ratio, baseSize, scale, sizes) {
    sizes = [baseSize];

    if (scale > 100) {
      throw Error('Scale must not exceed 100');
    }

    for (let i = 0; i < scale - 1; i++) {
      sizes.push(Math.round(sizes[sizes.length - 1] * ratio * 100) / 100);
    }
    return sizes;
  }

  const examples = calculateScale(ratio, baseSize, scale, sizes);

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
