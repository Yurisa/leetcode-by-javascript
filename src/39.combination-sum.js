/*
 * @lc app=leetcode id=39 lang=javascript
 *
 * [39] Combination Sum
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  if (candidates.length === 0) return [];
  const track = [];
  let sum = 0;
  const res = [];
  function backtrack(candidates, start, target) {
    if (sum === target) {
      res.push([...track]);
      return;
    }

    if (sum > target) {
      return;
    }
    for (let i = start; i < candidates.length; i++) {
      sum += candidates[i];
      track.push(candidates[i]);
      backtrack(candidates, i, target);
      sum -= candidates[i];
      track.pop();
    }
  }

  backtrack(candidates, 0, target);
  return res;
};
// @lc code=end
