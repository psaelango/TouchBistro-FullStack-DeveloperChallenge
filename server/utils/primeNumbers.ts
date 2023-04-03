export const isPrime = (num: number): boolean => {
  let isPrime = true;
  if (num < 2) isPrime = false;
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime;
}

export const listOfPrimes = (start: number, end: number) => {
  if (end < start) throw new Error('Start number should be greater than End');
  if (end < 2) throw new Error('There are no prime numbers less than 2');
  let primeNumbers = [];
  for (let i = (start > 2 ? start : 2); i <= end; i++) {
    if(isPrime(i)) {
      primeNumbers.push(i);
    }
  }
  return primeNumbers;
}