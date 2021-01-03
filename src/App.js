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
              <option value={ratios[1]}>Quadrant - 1:{ratios[1]}</option>
              <option value={ratios[2]}>Hemidiagon - 1:{ratios[2]}</option>
              <option value={ratios[3]}>Trion - 1:{ratios[3]}</option>
              <option value={ratios[4]}>Quadriagon - 1:{ratios[4]}</option>
              <option value={ratios[5]}>Biauron - 1:{ratios[5]}</option>
              <option value={ratios[6]}>Penton - 1:{ratios[6]}</option>
              <option value={ratios[7]}>Diagon - 1:{ratios[7]}</option>
              <option value={ratios[8]}>Bipenton - 1:{ratios[8]}</option>
              <option value={ratios[9]}>Hemiolion - 1:{ratios[9]}</option>
              <option value={ratios[10]}>Auron (Golden Ratio) - 1:{ratios[10]}</option>
              <option value={ratios[11]}>Hecton - 1:{ratios[11]}</option>
              <option value={ratios[12]}>Doppelquadrant - 1:{ratios[12]}</option>
              <option disabled>──────────</option>
              <option value={ratios[13]}>Minor Second - 1:{ratios[13]}</option>
              <option value={ratios[14]}>Major Second - 1:{ratios[14]}</option>
              <option value={ratios[15]}>Minor Third - 1:{ratios[15]}</option>
              <option value={ratios[16]}>Major Third - 1:{ratios[16]}</option>
              <option value={ratios[17]}>Perfect Fourth - 1:{ratios[17]}</option>
              <option value={ratios[18]}>Augmented Fourth - 1:{ratios[18]}</option>
              <option value={ratios[19]}>Perfect Fifth - 1:{ratios[19]}</option>
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
                <option val={num}>{num}</option>
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
