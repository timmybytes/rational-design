import React from 'react';
import logo from './rational-design-logo-card.svg';
import githubLogo from './github-logo-icon.svg';

const Header = () => (
  <header className='header'>
    <img src={logo} alt='logo' />
    <a className='header__link' href='https://github.com/timmybytes/rational-design'>
      <span>Fork Me</span>
      <img src={githubLogo} alt='Github logo' />
    </a>
  </header>
);

export default Header;
