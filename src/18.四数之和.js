/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b);
  const len = nums.length;
  const ans = [];
  for (let i = 0; i < len - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    for (let j = i + 1; j < len - 2; j++) {
      let l = j + 1;
      let r = len - 1;
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      while (l < r) {
        const sum = nums[i] + nums[j] + nums[l] + nums[r];
        if (sum === target) {
          ans.push([nums[i], nums[j], nums[l], nums[r]]);
          while (nums[l] === nums[++l]) {}
          while (nums[r] === nums[--r]) {}
        } else if (sum < target) {
          l++;
        } else {
          r--;
        }
      }
    }
  }
  return ans;
};
// @lc code=end
