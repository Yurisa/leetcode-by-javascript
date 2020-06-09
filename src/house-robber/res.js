/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (!nums || !nums.length) return 0;
  const dp = new Array(nums.length + 2).fill(0);
  const n = nums.length;
  for (let i = n - 1; i >= 0; i--) {
    dp[i] = Math.max(dp[i + 1], nums[i] + dp[i + 2]);
  }
  return dp[0];
};

const nums = [2, 7, 9, 3, 1];
console.log('nums', rob(nums));
