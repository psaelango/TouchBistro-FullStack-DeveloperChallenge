import { listOfPrimes } from "../utils/primeNumbers";
import { medianElems } from "../utils/mathFns";

interface PrimesAndMedian {
  primeNumbers: Array<Number>,
  median: Array<Number>
}

export const medianOfPrimes = (val: number): PrimesAndMedian => {
  if (val < 2) throw new Error('There are no prime numbers less than 2');

  const primeNumbers = listOfPrimes(2, val);
  const median = medianElems(primeNumbers, true);
  const result = {
    primeNumbers,
    median
  };
  
  return result;
}