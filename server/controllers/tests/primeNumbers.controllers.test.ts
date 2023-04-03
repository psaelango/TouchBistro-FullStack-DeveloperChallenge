import { medianOfPrimes } from '../primeNumbers';

describe('primeNumbers Controllers', () => {
  describe('medianOfPrimes', () => {
    it('It should return list of prime numbers and its median for a given value greater than above 2', () => {
      expect(medianOfPrimes(10)).toStrictEqual({
        primeNumbers: [2, 3, 5, 7],
        median: [3, 5],
      });
    });

    it('It should throw error for a given value below 2', () => {
      expect(() => medianOfPrimes(1)).toThrow(
        'There are no prime numbers less than 2'
      );
    });

    it('It should set cache value for a given value greater than MIN_CACHE_VALUE', () => {
      expect(medianOfPrimes(100000)).toHaveProperty('primeNumbers');
      expect(medianOfPrimes(100000)).toHaveProperty('median');
    });

    it('It should set cache value for a given value greater than MIN_CACHE_VALUE', () => {
      expect(medianOfPrimes(100003)).toHaveProperty('primeNumbers');
      expect(medianOfPrimes(100003)).toHaveProperty('median');
    });

    it('It should returm cache value for a given value greater than MIN_CACHE_VALUE', () => {
      expect(medianOfPrimes(100005)).toHaveProperty('primeNumbers');
      expect(medianOfPrimes(100005)).toHaveProperty('median');
    });
  });
});
