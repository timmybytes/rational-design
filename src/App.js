import React, { useState, useRef } from 'react';
import { ratios } from './ratios';
import Header from './components/Header';

function App() {
  const [currentRatio, setCurrentRatio] = useState(ratios[1]);
  const [currentBaseSize, setCurrentBaseSize] = useState(16);
  const [currentScale, setCurrentScale] = useState([currentBaseSize]);
  const ratioRef = useRef(currentRatio);
  const sizeRef = useRef(currentBaseSize);
  const scaleRef = useRef(currentScale);

  // Creating an arbitrary range of integers:
  // > const START=2, END=5;
  // > Array.from({length: END-START}, (x, i) => i+START)
  // [ 2, 3, 4 ]

  const START = 1,
    END = 100;
  const sizes = Array.from({ length: END - START }, (x, i) => i + START);

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
      <Header />
      <main>
        <form className='settings'>
          <div className='settings__ratio'>
            <label className='settings__ratio-label' htmlFor='ratios-select'>
              Ratio
            </label>
            <select
              className='settings__ratio-select'
              id='ratios-select'
              onChange={handleRatioChange}>
              <option value={ratios[1][0]}>{ratios[1][1]}</option>
              <option value={ratios[2][0]}>{ratios[2][1]}</option>
              <option value={ratios[3][0]}>{ratios[3][1]}</option>
              <option value={ratios[4][0]}>{ratios[4][1]}</option>
              <option value={ratios[5][0]}>{ratios[5][1]}</option>
              <option value={ratios[6][0]}>{ratios[6][1]}</option>
              <option value={ratios[7][0]}>{ratios[7][1]}</option>
              <option value={ratios[8][0]}>{ratios[8][1]}</option>
              <option value={ratios[9][0]}>{ratios[9][1]}</option>
              <option value={ratios[10][0]}>{ratios[10][1]}</option>
              <option value={ratios[11][0]}>{ratios[11][1]}</option>
              <option value={ratios[12][0]}>{ratios[12][1]}</option>
              <option disabled>──────────</option>
              <option value={ratios[13][0]}>{ratios[13][1]}</option>
              <option value={ratios[14][0]}>{ratios[14][1]}</option>
              <option value={ratios[15][0]}>{ratios[15][1]}</option>
              <option value={ratios[16][0]}>{ratios[16][1]}</option>
              <option value={ratios[17][0]}>{ratios[17][1]}</option>
              <option value={ratios[18][0]}>{ratios[18][1]}</option>
              <option value={ratios[19][0]}>{ratios[19][1]}</option>
            </select>
          </div>
          <div className='settings__base'>
            <label className='settings__base-label' htmlFor='base-size'>
              Base Size (px)
            </label>
            <select
              className='settings__ratio-select'
              name='base-size'
              onChange={e => {
                handleBaseSizeChange(e);
              }}>
              {sizes.map(num => (
                <option val={num}>{num}</option>
              ))}
            </select>
            {/* <input
              className='settings__base-input'
              name='base-size'
              type='number'
              value={currentBaseSize}
              min=''
              onChange={e => {
                handleBaseSizeChange(e);
              }}
            /> */}
          </div>
          <div className='settings__scale'>
            <label className='settings__scale-label' htmlFor='scale'>
              Scale
            </label>
            <select
              className='settings__scale-input'
              name='scale'
              onChange={e => {
                handleScaleChange(e);
              }}>
              {sizes.map(num => (
                <option val={currentScale.length}>{num}</option>
              ))}
            </select>
            {/* <input
              className='settings__scale-input'
              name='scale'
              type='number'
              // min='1'
              max='20'
              onChange={e => {
                handleScaleChange(e);
              }}
              value={currentScale.length}
            /> */}
          </div>
        </form>

        <section className='examples'>
          {currentScale.map(scale => {
            return (
              <>
                <span className='examples__labels'>{scale}px</span>
                <p style={{ fontSize: `${scale}px` }} className='examples__lines'>
                  Before we knew it, we were jumping over quick foxes and lazy cows.
                </p>
              </>
            );
          })}
        </section>
      </main>
    </>
  );
}

export default App;
