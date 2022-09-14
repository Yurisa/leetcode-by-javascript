/*
 * @lc app=leetcode id=377 lang=javascript
 *
 * [377] Combination Sum IV
 */

// @lc code=start
/**
 * 回溯超时
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
  let ans = 0;
  let curSum = 0;

  function backtrack() {
    if (curSum === target) {
      ans += 1;
      return;
    }
    if (curSum > target) return;
    for (let i = 0; i < nums.length; i++) {
      curSum += nums[i];
      backtrack(i);
      curSum -= nums[i];
    }
  }

  backtrack();
  return ans;
};

// 完全背包问题，即一个物品可以放k次
var combinationSum4 = function (nums, target) {
  const dp = new Array(target + 1).fill(0);
  dp[0] = 1;

  for (let j = 1; j <= target; j++) {
    for (let i = 0; i < nums.length; i++) {
      if (j >= nums[i]) {
        dp[j] += dp[j - nums[i]];
      }
    }
  }

  return dp[target];
};
// @lc code=end
