import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders login element', () => {
  render(<App />);
  const login = screen.getByText(/login/i);
  expect(login).toBeInTheDocument();
});
