/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  return [search(nums, target, true), search(nums, target, false)];
};

function search(nums, target, lower) {
  let l = 0;
  let r = nums.length - 1;
  let res = -1;
  while (l <= r) {
    let m = (l + r) >> 1;
    if (target === nums[m]) {
      res = m;
      if (lower) {
        r = m - 1;
      } else {
        l = m + 1;
      }
    } else if (target < nums[m]) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }
  return res;
}
