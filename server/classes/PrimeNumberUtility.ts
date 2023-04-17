export default class PrimeNumberUtility {
  isPrime(num: number) {
    let isPrime = true;
    if (num < 2) isPrime = false;
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        isPrime = false;
        break;
      }
    }
    return isPrime;
  };
  
  nextPrime(num: number) {
    if (num <= 1) return 2;
    while (!this.isPrime(++num)) {
      // do nothing
    }
    return num;
  };
  
  prevPrime(num: number) {
    if (num <= 2) throw new Error('There are no prime numbers less than 2');
    let prime = num;
    let found = false;
    while (!found) {
      prime--;
      if (this.isPrime(prime)) found = true;
    }
    return prime;
  };
} 