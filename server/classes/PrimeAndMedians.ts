import { medianElems } from '../utils/mathFns';
import CacheProxy from './CacheProxy';
import PrimeNumbers from './PrimeNumbers';

export interface Output {
  primeNumbers: number[];
  median: number[];
}

export default class PrimeAndMedians extends PrimeNumbers {
  primeUpto: number = 2;
  primeFrom: number = 2;
  sieveAlgorithm?: boolean;

  private MIN_CACHE_VALUE = 100000;

  constructor(
    primeUpto: number = 2,
    primeFrom: number = 2,
    sieveAlgorithm?: boolean
  ) {
    super();
    this.primeUpto = primeUpto;
    this.primeFrom = primeFrom;
    this.sieveAlgorithm = sieveAlgorithm;
  }

  private setValues(
    primeUpto: number,
    primeFrom: number = 2,
    sieveAlgo?: boolean
  ) {
    this.primeUpto = primeUpto;
    this.primeFrom = primeFrom;
    this.sieveAlgorithm = sieveAlgo;
  }

  private genCacheKey() {
    const prevPrimeVal = this.isPrime(this.primeUpto)
      ? this.primeUpto
      : this.prevPrime(this.primeUpto);
    const nextNonPrimeVal = this.nextPrime(this.primeUpto) - 1;
    return `medianOfPrimes.${prevPrimeVal}.${nextNonPrimeVal}`;
  }

  private getPrimeAndMedians(): Output {
    const primeNumbers = this.sieveAlgorithm
      ? this.getPrimesUsingSieveAlgo(this.primeUpto, this.primeFrom)
      : this.getPrimes(this.primeUpto, this.primeFrom);
    const median = medianElems(primeNumbers, true);
    return {
      primeNumbers,
      median,
    };
  }

  getResult(primeUpto: number, primeFrom: number = 2, sieveAlgo?: boolean): Output {
    this.setValues(primeUpto, primeFrom, sieveAlgo);
    if (this.primeUpto >= this.MIN_CACHE_VALUE) {
      const cacheProxy = new CacheProxy(this.genCacheKey());
      const cacheResult = cacheProxy.getCacheResult();
      if (cacheResult) {
        return cacheResult as Output;
      }
      let result = this.getPrimeAndMedians();
      cacheProxy.udpateCacheResult(result);
      return result;
    } else {
      return this.getPrimeAndMedians();
    }
  }
}
