import React, { useState, useRef, useContext } from 'react';
import { CirclePicker } from 'react-color';
import { ratios } from '../ratios';
import SettingsContext from '../contexts/SettingsContext';

import InfoPane from './InfoPane';
import Examples from './Examples';

const SettingsPane = () => {
  const [currentRatio, setCurrentRatio] = useState(ratios[3][0]);
  const [currentBaseSize, setCurrentBaseSize] = useState(12);
  const [currentScale, setCurrentScale] = useState([
    currentBaseSize,
    currentBaseSize,
    currentBaseSize,
  ]);
  const [bgColor, setBGColor] = useState('');
  const [textColor, setTextColor] = useState('');

  const ratioRef = useRef(currentRatio);
  const sizeRef = useRef(currentBaseSize);
  const scaleRef = useRef(currentScale);

  // react-color default color overrides
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

  const settings = useContext(SettingsContext);
  const [currentSettings, setSettings] = useState(settings);
  console.log({ currentSettings });

  // Generate array of 1-100 integers
  const START = 1,
    END = 100;
  const sizes = Array.from({ length: END - START }, (x, i) => i + START);

  const updateSettings = () => {
    setSettings({
      ratio: currentRatio,
      baseSize: currentBaseSize,
      scale: currentScale,
      bgColor: bgColor,
      color: textColor,
    });
  };

  const handleRatioChange = e => {
    setCurrentRatio(+e.target.value);
    ratioRef.current = +e.target.value;
    handleScaleChange();
    updateSettings();
  };

  const handleBaseSizeChange = e => {
    sizeRef.current = +e.target.value;
    setCurrentBaseSize(+e.target.value);
    handleScaleChange();
    updateSettings();
  };

  const handleScaleChange = e => {
    let increaser = e !== undefined ? +e.target.value : +currentScale.length;
    let arr = [+sizeRef.current];
    for (let i = 1; i < increaser; i++) {
      arr.push(Math.floor(arr[i - 1] * ratioRef.current * 100) / 100);
    }
    setCurrentScale(arr);
    scaleRef.current = arr;
    updateSettings();
  };

  return (
    <>
      <section className='settings'>
        <div className='settings__ratio'>
          <label className='settings__ratio-label' htmlFor='ratios-select'>
            Ratio
          </label>
          <select
            className='settings__ratio-select'
            id='ratios-select'
            onChange={handleRatioChange}>
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
        <div className='settings__base'>
          <label className='settings__base-label' htmlFor='base-size'>
            Base Size (px)
          </label>
          <select
            className='settings__ratio-select'
            name='base-size'
            defaultValue={currentBaseSize}
            onChange={e => {
              handleBaseSizeChange(e);
            }}>
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
            defaultValue={currentScale.length}
            onChange={e => {
              handleScaleChange(e);
            }}>
            {sizes.map((num, idx) => (
              <option key={idx} val={currentScale.length}>
                {num}
              </option>
            ))}
          </select>
        </div>
        <div className='settings__colors'>
          <div className='color-container'>
            <label className='settings__scale-label' htmlFor='bg-color'>
              BG Color
            </label>
            <CirclePicker
              colors={baseColors}
              onChange={e => {
                setBGColor(e.hex);
                updateSettings();
              }}
              width={'800'}
            />
          </div>
          <div className='color-container'>
            <label className='settings__scale-label' htmlFor='text-color'>
              Text Color
            </label>
            <CirclePicker
              colors={baseColors}
              onChange={e => {
                setTextColor(e.hex);
                updateSettings();
              }}
              width={'800'}
            />
          </div>
        </div>
      </section>
      <InfoPane />
      <Examples
        bgColor={bgColor}
        textColor={textColor}
        currentScale={currentScale}
      />
    </>
  );
};

export default SettingsPane;
