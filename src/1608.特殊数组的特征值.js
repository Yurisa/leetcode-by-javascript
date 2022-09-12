/*
 * @lc app=leetcode.cn id=1608 lang=javascript
 *
 * [1608] 特殊数组的特征值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function (nums) {
  nums.sort((a, b) => a - b);
  const n = nums.length;

  for (let i = 0; i <= 1001; i++) {
    let l = 0;
    let r = n;
    while (l < r) {
      let m = (l + r) >> 1;
      if (nums[m] >= i) {
        r = m;
      } else {
        l = m + 1;
      }
    }
    if (nums[r] >= i && i === n - r) return i;
  }
  return -1;
};
// @lc code=end
