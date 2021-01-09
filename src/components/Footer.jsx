import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='footer'>
      Made with{' '}
      <span role='img' aria-label='heart'>
        ❤️
      </span>{' '}
      by{' '}
      <a className='footer__link' href='https://timmybytes.com'>
        <span>Timothy Merritt</span>
      </a>
      . {currentYear}
    </footer>
  );
};

export default Footer;
