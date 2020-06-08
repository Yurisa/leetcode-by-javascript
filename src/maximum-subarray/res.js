/**
 * @param {number[]} nums
 * @return {number}
 * dp[i] 代表下标i为止的子数组的最大子数组和
 */
var maxSubArray = function (nums) {
  if (!nums || !nums.length) return 0;
  const dp = [...nums];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      dp[i] = Math.max(dp[i], dp[i - 1] + nums[i]);
    }
  }
  let ret = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < dp.length; i++) {
    ret = Math.max(ret, dp[i]);
  }
  return ret;
};

const input = [-2, 1, -3, 4, -1, 1, -5, 4];
console.log(maxSubArray(input));

var maxSubArray = function (nums) {
  let curSum = 0;
  let maxSum = nums[0];
  for (let i = 0; i < nums.length; i++) {
    curSum = nums[i] > curSum + nums[i] ? nums[i] : curSum + nums[i];
    maxSum = maxSum > curSum ? maxSum : curSum;
  }
  return maxSum;
};
