import React, { useState, useRef } from 'react';
import { ratios } from '../ratios';
import InfoPane from './InfoPane';
import Examples from './Examples';

const SettingsPane = () => {

  const [currentRatio, setCurrentRatio] = useState(ratios[3][0]);
  const [currentBaseSize, setCurrentBaseSize] = useState(16);
  const [currentScale, setCurrentScale] = useState([
    currentBaseSize,
    currentBaseSize,
    currentBaseSize,
  ]);
  const ratioRef = useRef(currentRatio);
  const sizeRef = useRef(currentBaseSize);
  const scaleRef = useRef(currentScale);

  const START = 1,
    END = 100;
  const sizes = Array.from({ length: END - START }, (x, i) => i + START);

  // let finalSettings = () => {
  //   console.log(ratioRef.current);
  //   console.log(sizeRef.current);
  //   console.log(scaleRef.current);
  //   <p>words</p>;
  // };

  const handleRatioChange = e => {
    setCurrentRatio(+e.target.value);
    ratioRef.current = +e.target.value;
    handleScaleChange();
  };

  const handleBaseSizeChange = e => {
    sizeRef.current = +e.target.value;
    setCurrentBaseSize(+e.target.value);
    handleScaleChange();
  };

  const handleScaleChange = e => {
    let increaser = e !== undefined ? +e.target.value : +currentScale.length;
    let arr = [+sizeRef.current];
    for (let i = 1; i < increaser; i++) {
      arr.push(Math.floor(arr[i - 1] * ratioRef.current * 100) / 100);
    }
    setCurrentScale(arr);
    scaleRef.current = arr;
  };

  return (
    <>
      <form
        className='settings'
        onSubmit={e => {
          e.preventDefault();
        }}>
        <div className='settings__ratio'>
          <label className='settings__ratio-label' htmlFor='ratios-select'>
            Ratio
          </label>
          <select
            className='settings__ratio-select'
            id='ratios-select'
            onChange={handleRatioChange}>
            <option disabled>Orthagon Ratios</option>
            {Object.keys(ratios).map(ratio =>
              ratios[ratio][1] === 'Doppelquadrant (Halves) 1:2' ? (
                <>
                  <option disabled>Musical Scale Ratios</option>
                  <option value={+ratios[ratio][0]}>{ratios[ratio][1]}</option>
                </>
              ) : (
                <option value={+ratios[ratio][0]}>{ratios[ratio][1]}</option>
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
            {sizes.map(num => (
              <option val={num}>{num}</option>
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
            {sizes.map(num => (
              <option val={currentScale.length}>{num}</option>
            ))}
          </select>
        </div>
        {/* TODO: Add copy function */}
        {/* <div>
          <button onClick={finalSettings}>Click</button>
          <pre>// Rational sizes --size-1: ratioRef</pre>
        </div> */}
      </form>
      <InfoPane />
      <Examples currentScale={currentScale} />
    </>
  );
};

export default SettingsPane;
