import React, { useState } from 'react';
import logo from '../assets/rational-design-logo-card.svg';
import githubLogo from '../assets/github-logo-icon.svg';

const Header = () => {
  const [showInfo, setShowInfo] = useState('none');

  const handleClick = () => {
    showInfo === 'none' ? setShowInfo('block') : setShowInfo('none');
  };
  return (
    <>
      <header className='header'>
        <img className='header__logo' src={logo} alt='logo' />
        <nav className='header__links'>
          <button className='header__links-link' onClick={handleClick}>
            <span className='header__links-link--span'>Info</span>
          </button>
          {/* <button className='header__links-link' onClick={handleClick}>
            <span className='header__links-link--span'>Colors</span>
          </button> */}
          <a className='header__links-link' href='https://github.com/timmybytes/rational-design'>
            <span className='header__links-link--span'>Fork Me</span>
            <img className='header__links-link--icon' src={githubLogo} alt='Github logo' />
          </a>
        </nav>
      </header>
      <article className='info' style={{ display: showInfo }}>
        <p>
          Choose a <strong>ratio</strong>, <strong>base font-size</strong> (pixels), and{' '}
          <strong>scale</strong> to create a ratio-based type scale! Use the increments of the scale
          to create projects with pleasing relational sizes.
        </p>
        <button onClick={handleClick}>Close</button>
      </article>
    </>
  );
};

export default Header;
