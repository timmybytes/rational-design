import { createContext } from 'react';

const SettingsContext = createContext({
  currentSettings: { ratio: 0, baseSize: 0, scale: 0, bgColor: '', color: '' },
  updateSettings: (ratio, baseSize, scale, bgColor, color) => {},
});

export const SettingsProvider = SettingsContext.Provider;
export const SettingsConsumer = SettingsContext.Consumer;

export default SettingsContext;
