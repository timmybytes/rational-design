import React from 'react';
import { SettingsProvider } from './contexts/SettingsContext';
import Header from './components/Header';
import SettingsPane from './components/SettingsPane';
import Footer from './components/Footer';

import RationalDesign from './components/Structure';

function App() {
  const settings = { ratio: 0, baseSize: 0, scale: 0 };
  return (
    <SettingsProvider value={settings}>
      {/* <Header /> */}
      {/* <main> */}
      {/* <SettingsPane /> */}
      {/* InfoPane */}
      {/* Examples */}
      {/* </main> */}
      {/* <Footer /> */}
      <RationalDesign />
    </SettingsProvider>
  );
}

export default App;
