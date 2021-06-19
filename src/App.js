import React, { useState } from 'react';
import { ratios } from './ratios';
import ColorSettings from './components/ColorSettings';
import Examples from './components/Examples';
import Footer from './components/Footer';
import Header from './components/Header';
import Info from './components/InfoPane';
import Main from './components/Main';
import Settings from './components/Settings';
import TypeScaleSettings from './components/TypeScaleSettings';

function App() {
  const [settings, setSettings] = useState({
    ratio: ratios[2][0],
    baseSize: 12,
    scale: 3,
    sizes: [],
  });
  const [colors, setColors] = useState({ foreground: '', background: '' });

  return (
    <>
      <Header />
      <Main>
        <Settings>
          <TypeScaleSettings
            updateTypeScale={data => setSettings(data)}
            settings={settings}
          />
          <ColorSettings
            updateColors={data => setColors(data)}
            colors={colors}
          />
        </Settings>
        <Info />
        <Examples colors={colors} settings={settings} />
      </Main>
      <Footer />
    </>
  );
}

export default App;
