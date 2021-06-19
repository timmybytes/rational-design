import React from 'react';
import { ratios } from '../ratios';

const TypeScaleSettings = ({
  updateTypeScale,
  settings: { ratio, baseSize, scale },
}) => {
  // Generate array of 1-100 integers
  const START = 1,
    END = 100;
  const sizes = Array.from({ length: END - START }, (x, i) => i + START);

  return (
    <>
      <div className='settings__ratio'>
        <label className='settings__ratio-label' htmlFor='ratios-select'>
          Ratio
        </label>
        <select
          className='settings__ratio-select'
          name='ratios-select'
          onChange={e =>
            updateTypeScale({ baseSize, scale, ratio: +e.target.value })
          }
          defaultValue={ratio}>
          <option disabled={true}>Orthagon Ratios</option>
          {Object.keys(ratios).map((ratio, idx) =>
            ratios[ratio][1] === 'Doppelquadrant (Halves) 1:2' ? (
              <React.Fragment key={idx}>
                <option disabled>Musical Scale Ratios</option>
                <option value={+ratios[ratio][0]}>{ratios[ratio][1]}</option>
              </React.Fragment>
            ) : (
              <option key={idx} value={+ratios[ratio][0]}>
                {ratios[ratio][1]}
              </option>
            )
          )}
        </select>
      </div>
      <div className='settings__base'>
        <label className='settings__base-label' htmlFor='base-size'>
          Base Size (px)
        </label>
        <select
          className='settings__ratio-select'
          name='base-size'
          onChange={e =>
            updateTypeScale({ baseSize: +e.target.value, scale, ratio })
          }
          defaultValue={baseSize}>
          {sizes.map((num, idx) => (
            <option key={idx} val={num}>
              {num}
            </option>
          ))}
        </select>
      </div>
      <div className='settings__scale'>
        <label className='settings__scale-label' htmlFor='scale'>
          Scale
        </label>
        <select
          className='settings__scale-input'
          name='scale'
          onChange={e =>
            updateTypeScale({ baseSize, ratio, scale: +e.target.value })
          }
          defaultValue={scale}>
          {sizes.map((num, idx) => (
            <option key={idx} val={num}>
              {num}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default TypeScaleSettings;
