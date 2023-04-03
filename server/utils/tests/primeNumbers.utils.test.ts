import { isPrime, listOfPrimes, nextPrime, prevPrime } from '../primeNumbers';

describe('primeNumbers Utils', () => {
  describe('isPrime', () => {
    it('It should return true for a given prime number', () => {
      expect(isPrime(5)).toBe(true);
    });

    it('It should return false for a given non prime number', () => {
      expect(isPrime(9)).toBe(false);
    });

    it('It should return false for a value less than 2', () => {
      expect(isPrime(1)).toBe(false);
      expect(isPrime(0)).toBe(false);
      expect(isPrime(-5)).toBe(false);
    });
  });

  describe('listOfPrimes', () => {
    it('It should return list of primes between 2 and 10', () => {
      expect(listOfPrimes(3, 10)).toEqual([3, 5, 7]);
    });

    it('It should return list of primes for any negative start values', () => {
      expect(listOfPrimes(-10, 10)).toEqual([2, 3, 5, 7]);
    });

    it('It should throw error if first value is less than second value', () => {
      expect(() => listOfPrimes(10, 2)).toThrow(
        'Start number should be greater than End'
      );
    });

    it('It should throw error if the second value is less than 2', () => {
      expect(() => listOfPrimes(-10, 1)).toThrow(
        'There are no prime numbers less than 2'
      );
    });
  });

  describe('nextPrime', () => {
    it('It should return 2 if the provided value is less than or equal to 1', () => {
      expect(nextPrime(1)).toEqual(2);
      expect(nextPrime(0)).toEqual(2);
      expect(nextPrime(-5)).toEqual(2);
    });

    it('It should return next prime number if the provided value is greater than 1', () => {
      expect(nextPrime(2)).toEqual(3);
      expect(nextPrime(9)).toEqual(11);
    });
  });

  describe('prevPrime', () => {
    it('It should throw error if the provided value is less than or equal to 2', () => {
      expect(() => prevPrime(1)).toThrow(
        'There are no prime numbers less than 2'
      );
      expect(() => prevPrime(0)).toThrow(
        'There are no prime numbers less than 2'
      );
      expect(() => prevPrime(-5)).toThrow(
        'There are no prime numbers less than 2'
      );
    });

    it('It should return previous prime number if the provided value is greater than 2', () => {
      expect(prevPrime(3)).toEqual(2);
      expect(prevPrime(5)).toEqual(3);
    });
  });
});
