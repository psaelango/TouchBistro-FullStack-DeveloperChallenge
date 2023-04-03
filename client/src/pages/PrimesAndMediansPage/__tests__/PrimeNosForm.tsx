import React from 'react';
import { render, screen } from '@testing-library/react';
import PrimeNosForm from '../PrimeNosForm';
import PrimeNosContextProvider from "../../../contexts/PrimeNosContext";

test('Renders Input Box', () => {
  render(
    <PrimeNosContextProvider>
      <PrimeNosForm />
    </PrimeNosContextProvider>
  );
  const inputElem = screen.getByTestId('maxPrimeSearch');
  expect(inputElem).toBeInTheDocument();
  expect(inputElem).toHaveValue(0);
});

test('Renders Submit Button with Text', () => {
  render(
    <PrimeNosContextProvider>
      <PrimeNosForm />
    </PrimeNosContextProvider>
  );
  const submitBtn = screen.getByTestId('maxPrimeSubmit');
  expect(submitBtn).toBeInTheDocument();
  expect(submitBtn).toHaveTextContent('Get Primes');
});

test('Renders Clear Button', () => {
  render(
    <PrimeNosContextProvider>
      <PrimeNosForm />
    </PrimeNosContextProvider>
  );
  const submitBtn = screen.getByTestId('maxPrimeClear');
  expect(submitBtn).toBeInTheDocument();
  expect(submitBtn).toHaveTextContent('Clear')
});
