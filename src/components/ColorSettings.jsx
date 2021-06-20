import React from 'react';
import { CirclePicker } from 'react-color';
import { EditableInput } from 'react-color/lib/components/common';

const inputStyles = {
  input: {
    border: '2px solid #444444',
    padding: '5px',
    borderRadius: '4px',
    margin: '5px 0',
  },
  label: {
    // fontSize: '1rem',
    // fontWeight: '800',
    // width: '100%',
    display: 'inline-block',
    color: '#999',
    padding: '5px',
  },
};

const ColorSettings = ({
  colors: { foreground, background },
  updateColors,
}) => {
  const baseColors = [
    '#f44336',
    '#9c27b0',
    '#3f51b5',
    '#2196f3',
    '#8bbbff',
    '#4caf50',
    '#8bc34a',
    '#cddc39',
    '#ffeb3b',
    '#ffc107',
    '#ff9800',
    '#ff5722',
    '#444444',
    '#FAFAFA',
  ];

  return (
    <div className='settings__colors'>
      <div className='color-container'>
        <div class='color-labels'>
          <label className='settings__scale-label' htmlFor='bg-color'>
            BG Color
          </label>
          <EditableInput
            style={inputStyles}
            label='Hex value'
            value={background}
            onChange={e => updateColors({ foreground: e.hex, background })}
          />
        </div>
        <CirclePicker
          colors={baseColors}
          onChange={e => updateColors({ foreground, background: e.hex })}
          width={'800'}
        />
      </div>
      <div className='color-container'>
        <div class='color-labels'>
          <label className='settings__scale-label' htmlFor='text-color'>
            Text Color
          </label>
          <EditableInput
            style={inputStyles}
            label='Hex value'
            value={foreground}
            onChange={e => updateColors({ foreground: e.hex, background })}
          />
        </div>
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
