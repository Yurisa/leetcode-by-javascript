/**
 * 数论解法
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
  if (n <= 3) return n - 1;
  const a = Math.floor(n / 3);
  const b = n % 3;
  if (b === 0) return Math.pow(3, a);
  if (b === 1) return Math.pow(3, a - 1) * 4;
  return Math.pow(3, a) * 2;
};

/**
 * dp解法
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
  if (n <= 3) return n - 1;
  const dp = new Array(n + 1).fill(0);

  dp[2] = 1;
  for (let i = 3; i <= n; i++) {
    for (let j = 1; j <= Math.floor(i / 2); j++) {
      dp[i] = Math.max(dp[i], Math.max(j * (i - j), j * dp[i - j]));
    }
  }
  return dp[n];
};
