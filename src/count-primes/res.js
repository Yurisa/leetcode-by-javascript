/**
 * 解法1 O(n^2)
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  let count = 0;
  for (let i = 2; i < n; i++) {
    if (isPrime(i)) {
      count++;
    }
  }
  return count;
};

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

/**
 * 解法1 O(n^2)
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  let count = 0;
  const isPrime = new Array(n);
  isPrime.fill(true);
  for (let i = 2; i * i < n; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j < n; j += i) {
        isPrime[j] = false;
      }
    }
  }
  for (let i = 2; i < n; i++) {
    if (isPrime[i]) count++;
  }
  return count;
};

console.log(countPrimes(10));
