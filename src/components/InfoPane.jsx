import React, { useState } from 'react';

const InfoPane = () => {
  const [showInfo, setShowInfo] = useState('none');

  const handleClick = () => {
    showInfo === 'none' ? setShowInfo('block') : setShowInfo('none');
  };
  return (
    <div>
      <article className='info' style={{ display: showInfo }}>
        <p>
          Choose a <strong>ratio</strong>, <strong>base font-size</strong> (pixels), and{' '}
          <strong>scale</strong> to create a ratio-based type scale! Use the increments of the scale
          to create projects with pleasing relational sizes.
        </p>
        <button onClick={handleClick}>Close</button>
      </article>
    </div>
  );
};
export default InfoPane;
