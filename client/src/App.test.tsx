import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders App Title Text', () => {
  render(<App />);
  const TitleText = screen.getByText(/Fullstack Developer/i);
  expect(TitleText).toBeInTheDocument();
});

test('Renders App Logo', () => {
  const { getByAltText } = render(<App />);
  const image = getByAltText('Touch Bistro');
  expect(image).toHaveAttribute('src', 'https://images.businessnewsdaily.com/app/uploads/2022/08/01033953/touchbistro-logo.png')
});
