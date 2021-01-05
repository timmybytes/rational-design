import React from 'react';

const Footer = () => {
  return (
    <footer
      className='footer'
      // style={{
      //   position: 'absolute',
      //   bottom: '0',
      //   width: '100%',
      //   margin: '0 auto',
      //   height: '2.5rem',
      //   textAlign: 'center',
      // }}
    >
      Made with{' '}
      <span role='img' aria-label='heart'>
        ❤️
      </span>{' '}
      by{' '}
      <a className='footer__link' href='https://timmybytes.com'>
        <span>Timothy Merritt</span>
      </a>
      .{' '}
      {() => {
        new Date().getFullYear();
      }}
    </footer>
  );
};

export default Footer;
