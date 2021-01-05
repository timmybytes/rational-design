import React from 'react';
import logo from '../assets/rational-design-logo.svg';
import githubLogo from '../assets/github-logo-icon.svg';

const Header = () => {
  return (
    <>
      <header className='header'>
        <img className='header__logo' src={logo} alt='logo' />
        <nav className='header__links'>
          <a className='header__links-link' href='https://github.com/timmybytes/rational-design'>
            <span className='header__links-link--span'>Fork Me</span>
            <img className='header__links-link--icon' src={githubLogo} alt='Github logo' />
          </a>
        </nav>
      </header>
    </>
  );
};

export default Header;
