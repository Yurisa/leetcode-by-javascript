/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  let ret = [];
  let path = [];
  nums.sort();
  backtrack(nums, 0);
  function backtrack(nums, start) {
    // 前序添加节点
    ret.push([...path]);
    if (start > nums.length) return;
    for (let i = start; i < nums.length; i++) {
      if (i > start && nums[i] === nums[i - 1]) continue;
      path.push(nums[i]);
      backtrack(nums, i + 1);
      path.pop();
    }
  }

  return ret;
};

console.log(subsetsWithDup([1, 2, 2]));
