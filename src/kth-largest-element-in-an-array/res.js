/*
 * @lc app=leetcode id=215 lang=javascript
 *
 * [215] Kth Largest Element in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findKthLargest = function (nums, k) {
  let len = nums.length;
  k = len - k;
  let lo = 0;
  let hi = len - 1;
  while (lo <= hi) {
    let p = partition(nums, lo, hi);
    if (p < k) {
      lo = p + 1;
    } else if (p > k) {
      hi = p - 1;
    } else {
      return nums[p];
    }
  }
  return -1;
};

function partition(nums, lo, hi) {
  let part = nums[lo];

  let i = lo + 1;
  let j = hi;

  while (i <= j) {
    while (i < hi && nums[i] <= part) {
      i++;
    }
    while (j > lo && nums[j] > part) {
      j--;
    }
    if (i >= j) {
      break;
    }
    swap(nums, i, j);
  }
  swap(nums, lo, j);
  return j;
}

function swap(nums, i, j) {
  let temp = nums[j];
  nums[j] = nums[i];
  nums[i] = temp;
}
// @lc code=end
