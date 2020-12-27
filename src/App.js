import React, { useState } from 'react';
import { ratios } from './ratios';
import Header from './Header';

function App() {
  const [currentRatio, setCurrentRatio] = useState(ratios[1]);
  const [currentBaseSize, setCurrentBaseSize] = useState(16);
  const [currentScale, setCurrentScale] = useState([currentBaseSize]);

  const handleRatioChange = e => {
    let selected = e.target.value;
    setCurrentRatio(selected);
  };

  const handleBaseSizeChange = e => {
    setCurrentBaseSize(e.target.value);
    fontBase(e.target.value);
  };

  const handleScaleChange = e => {
    let increaser = e.target.value;
    let arr = [currentBaseSize];
    for (let i = 1; i < increaser; i++) {
      arr.push(Math.floor(arr[i - 1] * currentRatio * 100) / 100);
    }
    setCurrentScale(arr);
  };

  const fontBase = size => {
    return {
      fontSize: size,
    };
  };

  return (
    <>
      <Header />
      <main>
        <section className='examples'>
          <article className='examples__ratios'>
            <div className='examples__ratios-selections'>
              <select
                className='examples__ratios-select'
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
              <label htmlFor='base-size'>Base Size</label>
              <input
                name='base-size'
                type='number'
                min='1'
                value={currentBaseSize}
                onChange={handleBaseSizeChange}
              />
              <label htmlFor='scale'>Scale</label>
              <input
                name='scale'
                type='number'
                min='1'
                max='20'
                onChange={handleScaleChange}
                value={currentScale.length}
              />
            </div>
            <div className='examples__ratios--display-selections'>
              <p>Ratio: {currentRatio}</p>
              <p>Base Size: {currentBaseSize}px</p>
              <p>Scale: {currentScale.length}</p>
            </div>
          </article>

          <article className='examples__text'>
            {currentScale.map(scale => {
              return (
                <>
                  <span className='examples__text-size'>{scale}px</span>
                  <p style={{ fontSize: `${scale}px` }} className='examples__text-lines'>
                    Before we knew it, we were jumping over quick foxes and lazy cows.
                  </p>
                </>
              );
            })}
          </article>
        </section>
      </main>
    </>
  );
}

export default App;
