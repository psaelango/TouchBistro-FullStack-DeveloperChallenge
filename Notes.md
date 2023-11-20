### Sieve of Eratosthenes Alternatives
```
const primes = (num) => {
  let arr = Array.from({ length: num - 1 }).map((x, i) => i + 2);
  let sqroot = Math.floor(Math.sqrt(num));
  let numsTillSqroot = Array.from({ length: sqroot - 1 }).map((x, i) => i + 2);
  numsTillSqroot.forEach(
    (x) => (arr = arr.filter((y) => y % x !== 0 || y === x))
  );
  return arr;
};
console.log(primes(20));


function primeFactorsTo(max) {
  let store = [];
  let primes = [];
  for (let i = 2; i < max; ++i) {
    if (!store[i]) {
      primes.push(i);
      for (let j = i << 1; j <= max; j += i) {
        store[j] = true;
      }
    }
  }
  return primes;
}
console.log(primeFactorsTo(20));
```

### Links Referred

> - https://blog.logrocket.com/linting-typescript-eslint-prettier/
> - https://codingpr.com/react-typescript-and-express/