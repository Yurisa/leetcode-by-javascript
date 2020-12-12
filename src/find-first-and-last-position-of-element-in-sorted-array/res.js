/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let lo = 0;
  let hi = nums.length - 1;
  const ret = [-1, -1];
  while (lo <= hi) {
    let mid = Math.floor((lo + hi) / 2);
    if (nums[mid] === target) {
      let left = mid - 1
      let right = mid + 1
      while (nums[mid] === nums[left]) {
        left--
      }
      ret[0] = left + 1;
      while (nums[mid] === nums[right]) {
        right++
      }
      ret[1] = right - 1;
      break;
    } else if (nums[mid] < target) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return ret;
};
const nums = [5, 7, 7, 8, 8, 10];
const target = 5;

console.log(searchRange(nums, target));
