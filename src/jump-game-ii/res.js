/**
 * 使用动态规划解无法无法通过所有测试用例时间复杂度为O(n^2)
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  const dp = [];
  dp[0] = 0;
  dp[1] = 1;

  for (let i = 2; i < nums.length; i++) {
    let min = Number.MAX_VALUE;
    for (let j = i - 1; j >= 0; j--) {
      if (nums[j] + j >= i && j + nums[j] > j) {
        min = Math.min(min, dp[j]);
      }
    }
    dp[i] = min + 1;
  }
  return dp[nums.length - 1] === Number.MAX_VALUE ? 0 : dp[nums.length - 1];
};

const nums = [1, 1, 1, 1];

/**
 * 正解：使用贪心算法，时间复杂度为O(N)
 * @param {*} nums
 */
var jump2 = function (nums) {
  const n = nums.length;
  let farthest = 0; // 表示[i,..., end]能到的最远位置
  let count = 0;
  let end = 0;

  for (let i = 0; i < n - 1; i++) {
    farthest = Math.max(farthest, nums[i] + i);
    if (end === i) {
      end = farthest;
      count++;
    }
  }
  return count;
};

console.log(jump2(nums));
