import React from 'react';
import { HexColorPicker } from 'react-colorful';

const ColorSettings = ({
  colors: { foreground, background },
  updateColors,
}) => {
  // const baseColors = [
  //   '#f44336',
  //   '#9c27b0',
  //   '#3f51b5',
  //   '#2196f3',
  //   '#8bbbff',
  //   '#4caf50',
  //   '#8bc34a',
  //   '#cddc39',
  //   '#ffeb3b',
  //   '#ffc107',
  //   '#ff9800',
  //   '#ff5722',
  //   '#444444',
  //   '#FAFAFA',
  // ];

  return (
    <div className='settings__colors'>
      <div className='color-container'>
        <HexColorPicker
          id='hex-color-picker'
          color={foreground}
          onChange={color => updateColors({ foreground: color, background })}
        />
        <label className='settings__label' htmlFor='hex-color-picker'>
          Foreground: {foreground}
        </label>
      </div>
      <div className='color-container'>
        <HexColorPicker
          id='hex-color-picker'
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
