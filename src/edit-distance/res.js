/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  const m = word1.length;
  const n = word2.length;
  const memo = Array.from({ length: m + 1 }, (x) =>
    Array.from({ length: n + 1 }, (y) => 0)
  );

  function dp(i, j) {
    if (i === -1) return j + 1;
    if (j === -1) return i + 1;

    if (memo[i][j]) return memo[i][j];
    let ret = Number.MAX_VALUE;
    if (word1[i] === word2[j]) {
      ret = dp(i - 1, j - 1);
    } else {
      ret = Math.min(dp(i - 1, j) + 1, dp(i, j - 1) + 1, dp(i - 1, j - 1) + 1);
    }
    memo[i][j] = ret;
    return ret;
  }
  return dp(m - 1, n - 1);
};
