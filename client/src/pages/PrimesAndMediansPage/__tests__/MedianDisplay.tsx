import React from 'react';
import { render, screen } from '@testing-library/react';
import MedianDisplay from '../MedianDisplay';
import PrimeNosContextProvider from "../../../contexts/PrimeNosContext";

test('Renders Median Title Text', () => {
  render(
    <PrimeNosContextProvider>
      <MedianDisplay />
    </PrimeNosContextProvider>
  );
  const MedianTitleText = screen.getByText(/Median will be displayed here/i);
  expect(MedianTitleText).toBeInTheDocument();
});
