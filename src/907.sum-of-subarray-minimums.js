/*
 * @lc app=leetcode id=907 lang=javascript
 *
 * [907] Sum of Subarray Minimums
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function (arr) {
  let res = 0;
  const all = [];
  const track = [];
  function backtrack(arr, start) {
    all.push([...track]);
    for (let i = start; i < arr.length; i++) {
      track.push(arr[i]);
      backtrack(arr, i + 1);
      track.pop();
    }
  }
  backtrack(arr, 0);

  console.log(all)
  for (const arr of all) {
    for (const item of arr) {
      res += item;
    }
  }
  return res % (Math.pow(10, 9) + 7);
};
// @lc code=end
