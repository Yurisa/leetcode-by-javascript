/*
 * @lc app=leetcode id=128 lang=javascript
 *
 * [128] Longest Consecutive Sequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  nums.sort((a, b) => a - b);

  if (nums.length === 0) return 0;
  let tmp = 1;
  let res = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i + 1] === nums[i]) continue;
    if (nums[i + 1] - nums[i] === 1) {
      tmp++;
    } else {
      tmp = 1;
    }
    res = Math.max(tmp, res);
  }
  return res;
};
// @lc code=end
