/*
 * @lc app=leetcode.cn id=96 lang=javascript
 *
 * [96] 不同的二叉搜索树
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i < n + 1; i++) {
    for (j = 1; j <= i; j++) {
      // j个数 当j为根节点时左子树j-1个数，右子树i-j个数
      dp[i] += dp[j - 1] * dp[i - j];
    }
  }
  return dp[n];
};
// @lc code=end
