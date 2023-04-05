import {
  listOfPrimes,
  nextPrime,
  prevPrime,
  isPrime,
  sieveOfEratosthenes
} from '../utils/primeNumbers';
import { medianElems } from '../utils/mathFns';
import AppCache from '../cache';

interface PrimesAndMedian {
  primeNumbers: number[];
  median: number[];
}

const MIN_CACHE_VALUE = 100000;

export const medianOfPrimes = (val: number, sieveAlgo = false): PrimesAndMedian => {
  if (val < 2) throw new Error('There are no prime numbers less than 2');
  console.log('Key list = ', AppCache.keys());

  let key = 'default';
  let ifCachedValue = false;
  const prevPrimeVal = isPrime(val) ? val : prevPrime(val);
  const nextNonPrimeVal = nextPrime(val) - 1;

  if (val >= MIN_CACHE_VALUE) {
    key = `medianOfPrimes.${prevPrimeVal}.${nextNonPrimeVal}`;
    console.log('Current key = ', key);
    ifCachedValue = AppCache.has(key);
    if (ifCachedValue) {
      console.log(`RETURNING CACHED VALUE`);
      return AppCache.get(key) as PrimesAndMedian;
    }
  }

  const primeNumbers = sieveAlgo ? sieveOfEratosthenes(prevPrimeVal) : listOfPrimes(2, prevPrimeVal);
  const median = medianElems(primeNumbers, true);
  const result = {
    primeNumbers,
    median,
  };

  if (val >= MIN_CACHE_VALUE && !ifCachedValue) AppCache.set(key, result);
  return result;
};
