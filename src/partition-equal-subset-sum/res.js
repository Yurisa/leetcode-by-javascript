/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  if (sum % 2 !== 0) return false;
  const n = sum / 2;
  const dp = [];
  for (let i = 0; i < n + 1; i++) {
    for (let j = 0; j < sum + 1; j++) {}
  }
};

const input = [1, 5, 11, 5];
