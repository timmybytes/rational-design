import React, { useState, useRef } from 'react';
import { ratios } from './ratios';
import Header from './components/Header';
import InfoPane from './components/InfoPane';
import SettingsPane from './components/SettingsPane';

function App() {
  const [currentRatio, setCurrentRatio] = useState(ratios[1]);
  const [currentBaseSize, setCurrentBaseSize] = useState(16);
  const [currentScale, setCurrentScale] = useState([currentBaseSize]);
  const ratioRef = useRef(currentRatio);
  const sizeRef = useRef(currentBaseSize);
  const scaleRef = useRef(currentScale);

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
        <SettingsPane />
        {/* TODO: <Examples /> with Context state */}
      </main>
    </>
  );
}

export default App;
