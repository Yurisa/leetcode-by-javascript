/*
 * @lc app=leetcode id=795 lang=javascript
 *
 * [795] Number of Subarrays with Bounded Maximum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var numSubarrayBoundedMax = function (nums, left, right) {
  function atMost(right) {
    let pre = 0;
    let res = 0;

    for (const it of nums) {
      if (it <= right) {
        pre += 1;
      } else {
        pre = 0;
      }
      res += pre;
    }
    return res;
  }

  return atMost(right) - atMost(left - 1);
};
// @lc code=end
