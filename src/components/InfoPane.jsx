import React, { useState } from 'react';

const Info = () => {
  const [showInfo, setShowInfo] = useState('none');
  const [isActive, setIsActive] = useState('false');

  const handleClick = () => {
    showInfo === 'none' ? setShowInfo('block') : setShowInfo('none');
    setIsActive(!isActive);
  };

  return (
    <>
      <section className='info-pane'>
        <button
          className={`info-pane__button ${!isActive ? 'clicked' : ''}`}
          onClick={handleClick}>
          <span className='info-pane__button-text' aria-label='info button'>
            ?
          </span>
        </button>
        <article className='info-pane__panel' style={{ display: showInfo }}>
          <p className='info-pane__panel-text'>
            Choose a <strong>ratio</strong>, <strong>base font-size</strong> (in
            pixels), and <strong>scale</strong> to create a ratio-based type
            scale! Use the increments of the scale to create projects with
            pleasing relational sizes. Copy your scale via the buttons below and
            paste directly into your project!
          </p>
        </article>
      </section>
    </>
  );
};
export default Info;
