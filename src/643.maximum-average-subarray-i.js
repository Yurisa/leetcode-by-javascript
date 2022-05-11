/*
 * @lc app=leetcode id=643 lang=javascript
 *
 * [643] Maximum Average Subarray I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  const window = [];
  let res = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < nums.length; i++) {
    if (i < k - 1) {
      window.push(nums[i]);
    } else {
      window.push(nums[i]);
      const avg = getAvg(window);
      res = Math.max(avg, res);
      window.shift();
    }
  }
  return res;
};

function getAvg(arr) {
  const n = arr.length;
  let sum = 0;
  for (const item of arr) {
    sum += item;
  }
  return sum / n;
}
// @lc code=end
