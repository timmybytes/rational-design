import React, { useState } from 'react';
import { calculateScale } from './calculateScale';
import ColorSettings from './components/ColorSettings';
import CopySettings from './components/CopySettings';
import Examples from './components/Examples';
import Footer from './components/Footer';
import Header from './components/Header';
import Info from './components/Info';
import Main from './components/Main';
import Settings from './components/Settings';
import TypeScaleSettings from './components/TypeScaleSettings';
import { ratios } from './ratios';

function App() {
  // Initial settings based on Hemidiagon ratio: 1.118
  const [settings, setSettings] = useState({
    ratio: ratios[2][0],
    baseSize: 12,
    scale: 3,
    sizes: [12, 13.42, 15],
  });
  const [colors, setColors] = useState({
    foreground: '#444444',
    background: '#8bbbff',
  });

  return (
    <>
      <Header />
      <Main>
        <Settings>
          <TypeScaleSettings
            updateTypeScale={data => setSettings(calculateScale(data))}
            settings={settings}
          />
          <ColorSettings
            updateColors={data => setColors(data)}
            colors={colors}
          />
          <Info></Info>
        </Settings>
        <CopySettings settings={settings} colors={colors} />
        <Examples colors={colors} examples={settings.sizes} />
      </Main>
      <Footer />
    </>
  );
}

export default App;
