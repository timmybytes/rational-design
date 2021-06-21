import React, { useEffect, useState } from 'react';
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
    setJSONText(JSON.stringify(settings, null, 1));
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
      <div className='copy-container'>
        <CopyToClipboard
          text={scssText}
          onCopy={() => {
            setSCSSClicked(true);
            setTimeout(() => setSCSSClicked(false), 1500);
          }}>
          <button className='copy-button'>
            {!scssClicked ? 'Copy SCSS' : 'Copied!'}
          </button>
        </CopyToClipboard>
        <CopyToClipboard
          text={cssText}
          onCopy={() => {
            setCSSClicked(true);
            setTimeout(() => setCSSClicked(false), 1500);
          }}>
          <button className='copy-button'>
            {!cssClicked ? 'Copy CSS' : 'Copied!'}
          </button>
        </CopyToClipboard>
        <CopyToClipboard
          text={jsonText}
          onCopy={() => {
            setJSONClicked(true);
            setTimeout(() => setJSONClicked(false), 1500);
          }}>
          <button className='copy-button'>
            {!jsonClicked ? 'Copy JSON' : 'Copied!'}
          </button>
        </CopyToClipboard>
      </div>
    </>
  );
};

export default CopySettings;
