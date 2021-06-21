import React from 'react';
import githubLogo from '../assets/github-logo-icon.svg';
import logo from '../assets/rational-design-logo.svg';

const Header = () => {
  return (
    <>
      <header className='header'>
        <img className='header__logo' src={logo} alt='logo' />
        <div className='header__links'>
          <a
            className='header__links-link'
            href='https://github.com/timmybytes/rational-design'
            target='_blank'
            rel='noreferrer'>
            <span className='header__links-link--span'>Fork Me</span>
            <img
              className='header__links-link--icon'
              src={githubLogo}
              alt='Github logo'
            />
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
