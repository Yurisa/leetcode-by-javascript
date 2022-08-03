/*
 * @lc app=leetcode id=42 lang=javascript
 *
 * [42] Trapping Rain Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let l_max = 0;
  let r_max = 0;
  let res = 0;

  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    // [0...left]最大值
    l_max = Math.max(l_max, height[left]);
    r_max = Math.max(r_max, height[right]);

    if (l_max > r_max) {
      res += r_max - height[right];
      right--;
    } else {
      res += l_max - height[left];
      left++;
    }
  }
  return res;
};
// @lc code=end
