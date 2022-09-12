/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  let lo = 0;
  let hi = nums.length - 1;
  const n = nums.length;
  while (lo <= hi) {
    const p = partition(lo, hi);
    if (p > n - k) {
      hi = p - 1;
    } else if (p < n - k) {
      lo = p + 1;
    } else {
      return nums[p];
    }
  }

  function partition(lo, hi) {
    let part = nums[lo];
    let l = lo + 1;
    let r = hi;

    while (l <= r) {
      while (l < hi && nums[l] <= part) {
        l++;
      }

      while (r > lo && nums[r] > part) {
        r--;
      }

      if (l >= r) {
        break;
      }
      [nums[l], nums[r]] = [nums[r], nums[l]];
    }
    [nums[lo], nums[r]] = [nums[r], nums[lo]];
    return r;
  }

  return -1;
};
