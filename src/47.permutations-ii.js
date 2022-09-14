/*
 * @lc app=leetcode id=47 lang=javascript
 *
 * [47] Permutations II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const n = nums.length;
  const used = new Array(n).fill(false);
  const track = [];
  const ans = [];
  nums.sort((a, b) => a - b);

  function backtrack() {
    if (track.length === n) {
      ans.push([...track]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      // 如果前面的元素没有被使用过那么则跳过
      if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;

      if (used[i]) continue;
      used[i] = true;
      track.push(nums[i]);
      backtrack();
      track.pop();
      used[i] = false;
    }
  }
  backtrack();
  return ans;
};
// @lc code=end
