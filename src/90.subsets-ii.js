/*
 * @lc app=leetcode id=90 lang=javascript
 *
 * [90] Subsets II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  const track = [];
  const ans = [];
  nums.sort((a, b) => a - b);

  function backtrack(start) {
    ans.push([...track]);
    for (let i = start; i < nums.length; i++) {
      if (i > start && nums[i] === nums[i - 1]) continue;
      track.push(nums[i]);
      // 是i + 1而不是start+1
      backtrack(i + 1);
      track.pop();
    }
  }
  backtrack(0);
  return ans;
};
// @lc code=end
