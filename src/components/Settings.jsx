import React, { useState } from 'react';

const Settings = ({ children }) => {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <div className='settings-hide'>
        <span
          className='settings-hide-text'
          onClick={() => setClicked(!clicked)}>
          Show/Hide Settings
        </span>
        <button
          className={
            (`settings-hide-button`, clicked ? ` rotate-hide` : ` rotate-show`)
          }
          onClick={() => setClicked(!clicked)}>
          &#9660;
        </button>
      </div>
      <div className={(`settings`, clicked ? ` hide` : '')}>{children}</div>
    </>
  );
};

export default Settings;
