import React, { useState, useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const CopySettings = ({ settings, colors }) => {
  const [scssText, setSCSSText] = useState();
  const [scssClicked, setSCSSClicked] = useState(false);
  const [cssText, setCSSText] = useState();
  const [cssClicked, setCSSClicked] = useState(false);
  const [jsonText, setJSONText] = useState();
  const [jsonClicked, setJSONClicked] = useState(false);

  useEffect(() => {
    settings.colors = colors;
    setJSONText(JSON.stringify(settings));
    // Format settings object/array as strings
    // prettier-ignore
    setSCSSText(`// Generated via https://github.com/timmybytes/rational-design\n
    // Color Variables
    $foreground: ${colors.foreground};
$background: ${colors.background};\n
// Type-Scale Variables
$base-font-size: ${settings.baseSize}px;
$ratio: ${settings.ratio};
${settings.sizes
  .map((size, idx) => `$size-${idx + 1}: ${size}px;\n`)
  .join('')}`);

    // prettier-ignore
    setCSSText(`/* Generated via https://github.com/timmybytes/rational-design */\n
:root {
  /* Color Variables */
  --foreground: ${colors.foreground};
  --background: ${colors.background};\n
  /* Type-Scale Variables */
  --base-font-size: ${settings.baseSize}px;
  --ratio: ${settings.ratio};
${settings.sizes.map((size, idx) => `  --size-${idx + 1}: ${size}px;\n`).join('')}}`);

    // Reset 'copied' message on settings change
    setSCSSClicked(false);
    setCSSClicked(false);
    setJSONClicked(false);
  }, [settings, colors]);

  return (
    <>
      <p className=''>Click to copy your settings!</p>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          justifyItems: 'center',
          alignItems: 'center',
        }}>
        <CopyToClipboard text={scssText} onCopy={() => setSCSSClicked(true)}>
          <button
            style={{
              padding: '.25rem 1rem',
              margin: '0 .5rem',
              border: '2px solid #444444',
              borderRadius: '6px',
              background: '#8bbbff',
            }}
            className='info-pane__button-text'>
            {!scssClicked ? 'Copy as SCSS' : 'Copied!'}
          </button>
        </CopyToClipboard>
        <CopyToClipboard text={cssText} onCopy={() => setCSSClicked(true)}>
          <button
            style={{
              padding: '.25rem 1rem',
              margin: '0 .5rem',
              border: '2px solid #444444',
              borderRadius: '6px',
              background: '#8bbbff',
            }}
            className='info-pane__button-text'>
            {!cssClicked ? 'Copy as CSS' : 'Copied!'}
          </button>
        </CopyToClipboard>
        <CopyToClipboard text={jsonText} onCopy={() => setJSONClicked(true)}>
          <button
            style={{
              padding: '.25rem 1rem',
              margin: '0 .5rem',
              border: '2px solid #444444',
              borderRadius: '6px',
              background: '#8bbbff',
            }}
            className='info-pane__button-text'>
            {!jsonClicked ? 'Copy as JSON' : 'Copied!'}
          </button>
        </CopyToClipboard>
      </div>
    </>
  );
};

export default CopySettings;
