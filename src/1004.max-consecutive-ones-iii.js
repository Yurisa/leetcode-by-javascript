/*
 * @lc app=leetcode id=1004 lang=javascript
 *
 * [1004] Max Consecutive Ones III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let zeros = 0;
  const n = nums.length;
  let r = 0;
  let l = 0;
  let ans = 0;
  while (r < n) {
    const c = nums[r];
    if (c === 0) {
      zeros++;
    }
    while (zeros > k) {
      if (nums[l] === 0) {
        zeros--;
      }
      l++;
    }
    ans = Math.max(ans, r - l + 1);
    r++;
  }
  return ans;
};
// @lc code=end
