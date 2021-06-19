import React from 'react';
import { CirclePicker } from 'react-color';

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

export default ColorSettings;
