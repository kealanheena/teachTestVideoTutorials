// My Code Starts Here

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders title', () => {
  render(<App />);
  const searchElement = screen.getByText(/Video Tutorials/i);
  expect(searchElement).toBeInTheDocument();
});

// My Code Ends Here