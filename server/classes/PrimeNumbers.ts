import PrimeNumberUtility from './PrimeNumberUtility';

export default class PrimeNumbers extends PrimeNumberUtility {
  constructor() {
    super();
  }

  getPrimesUsingSieveAlgo(end: number, start = 2) {
    if (end < 2) throw new Error('There are no prime numbers less than 2');

    const primeBoolArr = Array.from({ length: end + 1 }, () => true);
    primeBoolArr[0] = primeBoolArr[1] = false;

    for (let i = 2; i <= Math.floor(Math.sqrt(end)); i++) {
      for (let j = i + i; j <= end; j += i) {
        primeBoolArr[j] = false;
      }
    }
    const primeNumbers = primeBoolArr.reduce<number[]>(
      (result, element, index) =>
        element ? (result.push(index), result) : result,
      []
    );
    return primeNumbers;
  }

  getPrimes(end:number, start = 2) {
    if (end < start)
      throw new Error('Start number should be greater than End');
    if (end < 2) throw new Error('There are no prime numbers less than 2');
    const primeNumbers = [];
    for (let i = start > 2 ? start : 2; i <= end; i++) {
      if (this.isPrime(i)) {
        primeNumbers.push(i);
      }
    }
    return primeNumbers;
  }

  listPrimes(end:number, start = 2, useSieveAlgo: boolean) {
    if (useSieveAlgo) {
      return this.getPrimesUsingSieveAlgo(end, start);
    }
    return this.getPrimes(end, start);
  }
}
