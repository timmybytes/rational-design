import React, { useContext } from 'react';
import SettingsContext from '../contexts/SettingsContext';

const Example = () => {
  const settings = useContext(SettingsContext);
  console.log(`Example Settings: ${settings}`);
  return <p></p>;
};

export default Example;
