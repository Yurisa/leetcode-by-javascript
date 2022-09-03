/*
 * @lc app=leetcode id=16 lang=javascript
 *
 * [16] 3Sum Closest
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  let ans = nums[0] + nums[1] + nums[2];
  for (let i = 0; i < nums.length - 2; i++) {
    const a = nums[i];
    let l = i + 1;
    let r = nums.length - 1;

    while (l < r) {
      const sum = a + nums[l] + nums[r];
      if (Math.abs(target - sum) < Math.abs(target - ans)) {
        ans = sum;
      }
      if (target > sum) {
        l++;
      } else if (target < sum) {
        r--;
      } else {
        return ans;
      }
    }
  }
  return ans;
};
// @lc code=end
