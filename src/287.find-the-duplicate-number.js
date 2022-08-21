/*
 * @lc app=leetcode id=287 lang=javascript
 *
 * [287] Find the Duplicate Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  let l = 1; // 1
  let r = nums.length - 1; // n
  while (l < r) {
    let m = (l + r) >> 1;
    let cnt = 0;
    for (let i = 0; i < nums.length; i++) {
      cnt += nums[i] <= m;
    }

    if (cnt > m) {
      r = m;
    } else {
      l = m + 1;
    }
  }
  return r;
};
// @lc code=end
