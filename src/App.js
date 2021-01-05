import React from 'react';
import Header from './components/Header';
import SettingsPane from './components/SettingsPane';

function App() {
  return (
    <>
      <Header />
      <main>
        <SettingsPane />
        {/* TODO: <Examples /> with Context state */}
      </main>
    </>
  );
}

export default App;
