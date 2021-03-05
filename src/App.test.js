// My Code Starts Here

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders innput box', () => {
  render(<App />);
  const searchElement = screen.getByText(/search/i);
  expect(searchElement).toBeInTheDocument();
});

// My Code Ends Here