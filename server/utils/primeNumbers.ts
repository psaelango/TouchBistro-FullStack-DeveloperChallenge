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
};

export const listOfPrimes = (start: number, end: number) => {
  if (end < start) throw new Error('Start number should be greater than End');
  if (end < 2) throw new Error('There are no prime numbers less than 2');
  const primeNumbers = [];
  for (let i = start > 2 ? start : 2; i <= end; i++) {
    if (isPrime(i)) {
      primeNumbers.push(i);
    }
  }
  return primeNumbers;
};

export const nextPrime = (num: number): number => {
  if (num <= 1) return 2;
  while (!isPrime(++num)) {
    // do nothing
  }
  return num;
};

export const prevPrime = (num: number): number => {
  if (num <= 2) throw new Error('There are no prime numbers less than 2');
  let prime = num;
  let found = false;
  while (!found) {
    prime--;
    if (isPrime(prime)) found = true;
  }
  return prime;
};

export const sieveOfEratosthenes = (num: number) => {
  if (num < 2) throw new Error('There are no prime numbers less than 2');

  const primeBoolArr = Array.from({ length: num + 1 }, () => true);
  primeBoolArr[0] = primeBoolArr[1] = false;
  
  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    for (let j = i + i; j <= num; j += i) {
      primeBoolArr[j] = false;
    }
  }
  const primeNumbers = primeBoolArr.reduce<number[]>(
    (result, element, index) =>
      element ? (result.push(index), result) : result,
    []
  );
  return primeNumbers;
};
