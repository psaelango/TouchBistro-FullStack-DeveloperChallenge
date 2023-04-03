import React from 'react';
import { render, screen } from '@testing-library/react';
import PrimeNosDisplay from '../PrimeNosDisplay';
import PrimeNosContextProvider from "../../../contexts/PrimeNosContext";

test('Renders Prime Numbers Display Title Text', () => {
  render(
    <PrimeNosContextProvider>
      <PrimeNosDisplay />
    </PrimeNosContextProvider>
  );
  const PrimeNosTitleText = screen.getByText(/List of Prime numbers/i);
  expect(PrimeNosTitleText).toBeInTheDocument();
});
