import InfoPane from './InfoPane';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('InfoPane', () => {
  test('toggles', () => {
    render(<InfoPane />);
    // Add test to check for info pane toggle
    expect(screen.getByText('?')).toBeInTheDocument();
    // click event
    // check for info text
  });
});
