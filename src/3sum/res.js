/**
 * 解法1 枚举 + map
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum1 = function(nums) {
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

/**
 * 解法1 枚举 + 对撞指针
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum2 = function(nums) {
  nums.sort((a, b) => a - b);
  const ret = [];

  for (let i = 0; i < nums.length - 1; i++) {
    const a = nums[i];
    if (i > 0 && a === nums[i - 1]) {
      continue;
    }

    let l = i + 1; // 左指针
    let r = nums.length - 1; // 右指针

    while (l < r) {
      const sum = a + nums[l] + nums[r];

      if (sum > 0) {
        r--;
      } else if (sum < 0) {
        l++;
      } else {
        ret.push([nums[i], nums[l], nums[r]]);
        while (l < r && nums[l] === nums[l + 1]) {
          l++;
        }
        while (l < r && nums[r] === nums[r - 1]) {
          r--;
        }
        l++;
        r--;
      }
    }
  }

  return ret;
};

const nums = [1,0,0,0];
console.log(threeSum2(nums));
