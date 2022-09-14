/*
 * @lc app=leetcode id=40 lang=javascript
 *
 * [40] Combination Sum II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const track = [];
  let curSum = 0;
  const ans = [];
  candidates.sort((a, b) => a - b);

  function backtrack(start) {
    if (curSum === target) {
      ans.push([...track]);
      return;
    }

    if (curSum > target) return;
    for (let i = start; i < candidates.length; i++) {
      if (i > start && candidates[i] === candidates[i - 1]) continue;
      curSum += candidates[i];
      track.push(candidates[i]);
      backtrack(i + 1);
      track.pop();
      curSum -= candidates[i];
    }
  }

  backtrack(0);
  return ans;
};
// @lc code=end
