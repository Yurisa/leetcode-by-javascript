/**
 * @param {number[]} nums
 * @return {number}
 * dp[i] 代表以i为起点开始抢
 */
var rob = function (nums) {
  if (!nums || !nums.length) return 0;
  const n = nums.length;
  if (n === 1) return nums[0];
  if (n === 2) return Math.max(nums[0], nums[1]);

  return Math.max(solution(nums, 0, n - 2), solution(nums, 1, n - 1));
};

var solution = function (nums, start, end) {
  const dp = [];
  let dp_1 = 0;
  let dp_2 = 0;
  for (let i = end; i >= start; i--) {
    dp[i] = Math.max(dp_1, dp_2 + nums[i]);
    dp_2 = dp_1;
    dp_1 = dp[i];
  }
  return dp[start];
};

const input = [2, 3];
console.log(rob(input));
