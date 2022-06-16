/*
 * @lc app=leetcode id=532 lang=javascript
 *
 * [532] K-diff Pairs in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
  nums.sort((a, b) => a - b);
  let n = nums.length,
    count = 0;

  for (let i = 0; i < n - 1; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) continue;
    for (let j = i + 1; j < n; j++) {
      if (j > i + 1 && nums[j] == nums[j - 1]) continue;
      if (nums[j] - nums[i] > k) break;

      if (nums[j] - nums[i] == k) {
        count++;
      }
    }
  }
  return count;
};
// @lc code=end
