/*
 * @lc app=leetcode id=912 lang=javascript
 *
 * [912] Sort an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  function sort(nums, lo, hi) {
    if (lo >= hi) return;
    const part = partition(nums, lo, hi);
    sort(nums, lo, part - 1);
    sort(nums, part + 1, hi);
  }
  sort(nums, 0, nums.length - 1);
  return nums;
};

function partition(nums, lo, hi) {
  const p = nums[lo];
  let l = lo + 1;
  let r = hi;
  while (l <= r) {
    while (l < hi && nums[l] <= p) {
      l++;
    }

    while (r > lo && nums[r] > p) {
      r--;
    }

    if (l >= r) {
      break;
    }
    swap(nums, l, r);
  }
  swap(nums, lo, r);
  return r;
}

function swap(nums, l, r) {
  let temp = nums[l];
  nums[l] = nums[r];
  nums[r] = temp;
}
// @lc code=end

// 选择排序

function sort(nums) {
  for (let i = 0; i < nums.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[minIndex] >= nums[j]) {
        // 找到最小值
        minIndex = j;
      }
    }
    [nums[minIndex], nums[i]] = [nums[i], nums[minIndex]];
  }
  return nums;
}

// 冒泡排序

function sort(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - i - 1; j++) {
      if (nums[j] >= nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
  }
  return nums;
}

// 归并排序
const temp = [];
var sortArray = function (nums) {
  function sort(nums, lo, hi) {
      if(lo >= hi) return 
    let mid = Math.floor((lo + hi) / 2);

    sort(nums, lo, mid);
    sort(nums, mid + 1, hi);
    merge(nums, lo, mid, hi);
  }

  sort(nums, 0, nums.length - 1);
  return nums;
};

function merge(nums, lo, mid, hi) {
  for (let i = lo; i <= hi; i++) {
    temp[i] = nums[i];
  }

  let l = lo;
  let r = mid + 1;

  for (let i = lo; i <= hi; i++) {
    if (l >= mid + 1) {
      nums[i] = temp[r];
      r++;
    } else if (r >= hi + 1) {
      nums[i] = temp[l];
      l++;
    } else if (temp[l] > temp[r]) {
      nums[i] = temp[r];
      r++;
    } else {
      nums[i] = temp[l];
      l++;
    }
  }
}