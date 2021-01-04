import React, { useState, useRef } from 'react';

const ColorPicker = () => {
  const [toggle, setToggle] = useState(false);
  const [swatchColorOne, setSwatchColorOne] = useState('#000000');
  const [isCopied, setIsCopied] = useState(false);
  const colorElement = useRef();

  function handleClickOne(e) {
    let random_hex_color_code = (Math.random() * 0xfffff * 1000000).toString(16);
    let final_color = '#' + random_hex_color_code.slice(0, 6);
    setToggle(toggle ? null : true);
    setSwatchColorOne(final_color);
    setIsCopied(false);
  }

  function copyToClipboard() {
    const { current } = colorElement;
    current.select();
    document.execCommand('copy');
    setIsCopied(true);
  }

  return (
    <div className='card'>
      <div className='card__outer-container'>
        <div className='card__inner-container'>
          <button
            className='card__color-swatch'
            onClick={handleClickOne}
            style={{ backgroundColor: swatchColorOne }}></button>
        </div>
        <input readOnly ref={colorElement} className='card__color-code' value={swatchColorOne} />
        <button onClick={copyToClipboard}>{!isCopied ? 'Copy To Clipboard' : 'Copied'}</button>
      </div>
    </div>
  );
};

export default ColorPicker;
