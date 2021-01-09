import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  test('"Fork Me" link points to correct address', () => {
    render(<Header />);
    const link = screen.getByRole('link', {
      name: /Fork Me/i
    }).getAttribute('href');
    expect(link).toBe('https://github.com/timmybytes/rational-design');
  });
});
