import InfoPane from './InfoPane';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('InfoPane', () => {
  test('toggles', () => {
    render(<InfoPane />);

    expect(screen.getByText('?')).toBeInTheDocument();
  });
});
