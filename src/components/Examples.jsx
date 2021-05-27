import React, { useContext } from 'react';
import SettingsContext from '../contexts/SettingsContext';

const Examples = ({ bgColor, textColor, currentScale }) => {
  const settings = useContext(SettingsContext);
  return (
    <section
      className='examples'
      style={{ background: bgColor, color: textColor }}>
      {currentScale.map((scale, idx) => {
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
};

export default Examples;
