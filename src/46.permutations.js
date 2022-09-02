/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const track = [];
  const res = [];
  const used = [];
  function backtrack(nums) {
    if (track.length === nums.length) {
      res.push([...track]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) {
        continue;
      }
      track.push(nums[i]);
      used[i] = true;
      backtrack(nums);
      track.pop();
      used[i] = false;
    }
  }
  backtrack(nums, 0);
  return res;
};

/**
 * 解法二
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const len = nums.length;
  const ans = [];
  for (let i = 0; i < nums.length; i++) {
    backtrack([nums[i]]);
  }
  function backtrack(path) {
    if (path.length === len) {
      ans.push(path);
      return;
    }
    for (let i = 0; i < len; i++) {
      if (path.includes(nums[i])) {
        continue;
      }
      backtrack(path.concat(nums[i]));
    }
  }
  return ans;
};
