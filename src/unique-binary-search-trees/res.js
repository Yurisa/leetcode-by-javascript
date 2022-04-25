/*
 * @lc app=leetcode id=96 lang=javascript
 *
 * [96] Unique Binary Search Trees
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  const memo = new Array(n + 1);

  for (let i = 0; i < n + 1; i++) {
    memo[i] = new Array(n + 1).fill(0);
  }

  function count(lo, hi) {
    if (lo > hi) return 1;

    if (memo[lo][hi] !== 0) {
      return memo[lo][hi];
    }

    let ret = 0;
    for (let i = lo; i <= hi; i++) {
      // 如果i作为根节点
      const left = count(lo, i - 1);
      const right = count(i + 1, hi);
      ret = ret + left * right;
    }
    memo[lo][hi] = ret;
    return ret;
  }
  return count(1, n);
};
// @lc code=end
