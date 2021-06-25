import React from 'react';
import { HexColorPicker } from 'react-colorful';

const ColorSettings = ({
  colors: { foreground, background },
  updateColors,
}) => {
  return (
    <div className='settings__colors'>
      <div className='color-container'>
        <HexColorPicker
          color={foreground}
          onChange={color => updateColors({ foreground: color, background })}
        />
        <label className='settings__label' htmlFor='hex-color-picker'>
          Foreground: {foreground}
        </label>
      </div>
      <div className='color-container'>
        <HexColorPicker
          color={background}
          onChange={color => updateColors({ foreground, background: color })}
        />
        <label className='settings__label' htmlFor='hex-color-picker'>
          Background: {background}
        </label>
      </div>
    </div>
  );
};

export default ColorSettings;
