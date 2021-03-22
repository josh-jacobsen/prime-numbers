import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Enter 2 numbers that you want to calculate the Prime Numbers for/i);
  expect(linkElement).toBeInTheDocument();
});

// TODO add a lot more tests. Kept it to just a rendering test here 
// Both this file and sieve.test.ts would be moved to a seperate tests folder in due course 
