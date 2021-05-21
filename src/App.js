import React from 'react';
import Header from './components/Header';
import SettingsPane from './components/SettingsPane';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <SettingsPane />
      </main>
      <Footer />
    </>
  );
}

export default App;
