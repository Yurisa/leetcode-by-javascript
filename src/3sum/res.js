/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums.sort((a, b) => a - b);
  const set = new Set();
  const ret = [];

  for (let i = 0; i < nums.length - 1; i++) {
    const a = nums[i];
    if (i > 0 && a === nums[i - 1]) {
      continue;
    }

    const map = new Map();

    for (let j = i + 1; j < nums.length; j++) {
      const b = nums[j];
      if (map.has(-a - b)) {
        set.add(JSON.stringify([a, b, -a - b]));
      } else {
        map.set(b, 1);
      }
    }
  }

  for (let item of set.keys()) {
    ret.push(JSON.parse(item));
  }

  return ret;
};
