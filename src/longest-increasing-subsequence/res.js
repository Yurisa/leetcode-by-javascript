/**
 * @param {number[]} nums
 * @return {number}
 * dp[i] 表示以下标i为结尾的子序列的最长子序列长度
 */
var lengthOfLIS = function (nums) {
  if (!nums || !nums.length) return 0;
  const dp = new Array(nums.length).fill(1);
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  let ret = 0;
  for (let i = 0; i < nums.length; i++) {
    ret = Math.max(ret, dp[i]);
  }
  return ret;
};

const input = [1, 3, 6, 7, 9, 4, 10, 5, 6];

console.log(lengthOfLIS(input));
