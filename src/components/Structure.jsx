import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import InfoPane from './InfoPane';
import { CirclePicker } from 'react-color';
import { ratios } from '../ratios';

const Main = ({ children }) => <main>{children}</main>;

const Settings = ({ children }) => {
  return <div className='settings'>{children}</div>;
};

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
      <div className='ratio'>
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
          <option disabled>Orthagon Ratios</option>
          {Object.keys(ratios).map((ratio, idx) =>
            ratios[ratio][1] === 'Doppelquadrant (Halves) 1:2' ? (
              <>
                <option disabled>Musical Scale Ratios</option>
                <option
                  key={idx}
                  value={+ratios[ratio][0]}
                  // conditional selection based on currentRatio
                >
                  {ratios[ratio][1]}
                </option>
              </>
            ) : (
              <option
                key={idx}
                value={+ratios[ratio][0]}
                // conditional selection based on currentRatio
              >
                {ratios[ratio][1]}
              </option>
            )
          )}
        </select>
      </div>
      <div className='base-size'>
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
      <div className='scale'>
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

const ColorSettings = ({
  colors: { foreground, background },
  updateColors,
}) => {
  const baseColors = [
    '#f44336',
    '#e91e63',
    '#9c27b0',
    '#673ab7',
    '#3f51b5',
    '#2196f3',
    '#03a9f4',
    '#8bbbff',
    '#009688',
    '#4caf50',
    '#8bc34a',
    '#cddc39',
    '#ffeb3b',
    '#ffc107',
    '#ff9800',
    '#ff5722',
    '#444444',
    'fafafa',
  ];

  return (
    <div className='settings__colors'>
      <div className='color-container'>
        <label className='settings__scale-label' htmlFor='bg-color'>
          BG Color
        </label>
        <CirclePicker
          colors={baseColors}
          onChange={e => updateColors({ foreground, background: e.hex })}
          width={'800'}
        />
      </div>
      <div className='color-container'>
        <label className='settings__scale-label' htmlFor='text-color'>
          Text Color
        </label>
        <CirclePicker
          colors={baseColors}
          onChange={e => updateColors({ foreground: e.hex, background })}
          width={'800'}
        />
      </div>
    </div>
  );
};

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

const RationalDesign = () => {
  const [settings, setSettings] = useState({
    ratio: ratios[2][0],
    baseSize: 12,
    scale: 3,
    sizes: [],
  });
  const [colors, setColors] = useState({ foreground: '', background: '' });

  const handleTypeScaleChange = data => {
    setSettings(data);
  };

  const handleColorChange = data => {
    console.log(colors);
    setColors(data);
  };

  return (
    <>
      <Header />
      <Main>
        <Settings>
          <TypeScaleSettings
            updateTypeScale={handleTypeScaleChange}
            settings={settings}
          />
          <ColorSettings updateColors={handleColorChange} colors={colors} />
        </Settings>
        <InfoPane />
        <Examples colors={colors} settings={settings} />
      </Main>
      <Footer />
    </>
  );
};

export default RationalDesign;
