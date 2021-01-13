import React, { useState } from 'react';
import { CirclePicker } from 'react-color';

const ColorPanel = props => {
  const [bgColor, setBGColor] = useState('');
  const [textColor, setTextColor] = useState('');
  const baseColors = [
    '#f44336',
    '#e91e63',
    '#9c27b0',
    '#673ab7',
    '#3f51b5',
    '#2196f3',
    '#8bbbff',
    '#00bcd4',
    '#009688',
    '#4caf50',
    '#8bc34a',
    '#cddc39',
    '#ffeb3b',
    '#ffc107',
    '#ff9800',
    '#ff5722',
    '#000000',
    '#ffffff',
  ];

  const handleChange = e => {
    props.onChange(e => {
      setBGColor(e.hex);
    });
  };
  return (
    <article className='settings__color'>
      <div>
        <div className='color-container'>
          <label className='settings__scale-label' htmlFor='bg-color'>
            BG Color
          </label>
          <CirclePicker onChange={handleChange} width={'800'} colors={baseColors} />
        </div>
        <div className='color-container'>
          <label className='settings__scale-label' htmlFor='text-color'>
            Text Color
          </label>
          <CirclePicker
            onChange={e => {
              setTextColor(e.hex);
            }}
            width={'800'}
            colors={baseColors}
          />
        </div>
      </div>
    </article>
  );
};

export default ColorPanel;
