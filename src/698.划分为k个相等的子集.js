/*
 * @lc app=leetcode.cn id=698 lang=javascript
 *
 * [698] 划分为k个相等的子集
 */

// @lc code=start
/**
 * 桶视角
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function (nums, k) {
  let sum = 0;
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    sum += nums[i];
  }
  if (sum % k !== 0) return false;

  const target = sum / k;
  const used = new Array(n).fill(false);
  function backtrack(k, bucket, index) {
    if (k === 0) return true;
    if (bucket === target) {
      return backtrack(k - 1, 0, 0);
    }

    for (let i = index; i < n; i++) {
      if (used[i]) continue;

      if (bucket + nums[i] > target) continue;

      used[i] = true;
      bucket += nums[i];
      if (backtrack(k, bucket, i + 1)) {
        return true;
      }
      bucket -= nums[i];
      used[i] = false;
    }
    return false;
  }
  return backtrack(k, 0, 0);
};

/**
 * 货物视角
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function (nums, k) {
  let sum = 0;
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    sum += nums[i];
  }
  if (sum % k !== 0) return false;

  const target = sum / k;
  nums.sort((a, b) => b - a);
  const buckets = new Array(k).fill(0);
  function backtrack(index) {
    // 检查所有桶的数字之和是否都是 target
    if (index == nums.length) {
      for (let i = 0; i < k; i++) {
        if (buckets[i] != target) {
          return false;
        }
      }
      // nums 成功平分成 k 个子集
      return true;
    }

    for (let i = 0; i < k; i++) {
      if (buckets[i] + nums[index] > target) continue;
      buckets[i] += nums[index];
      if (backtrack(index + 1)) {
        return true;
      }
      buckets[i] -= nums[index];
    }
    return false;
  }
  return backtrack(0);
};
// @lc code=end
