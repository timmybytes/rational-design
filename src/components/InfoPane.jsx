import React, { useState } from 'react';

const InfoPane = () => {
  const [showInfo, setShowInfo] = useState('none');
  const [isActive, setIsActive] = useState('false');

  const handleClick = () => {
    showInfo === 'none' ? setShowInfo('block') : setShowInfo('none');
    setIsActive(!isActive);
  };

  return (
    <>
      <div className='info-pane'>
        <button className={`info-pane__button ${!isActive ? 'clicked' : ''}`} onClick={handleClick}>
          <span className='info-pane__button-text' aria-label='info button'>
            ?
          </span>
        </button>
        <article className='info-pane__panel' style={{ display: showInfo }}>
          <p className='info-pane__panel-text'>
            Choose a <strong>ratio</strong>, <strong>base font-size</strong> (pixels), and{' '}
            <strong>scale</strong> to create a ratio-based type scale! Use the increments of the
            scale to create projects with pleasing relational sizes.
          </p>
        </article>
      </div>
    </>
  );
};
export default InfoPane;
