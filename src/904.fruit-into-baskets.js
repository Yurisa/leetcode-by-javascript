/*
 * @lc app=leetcode id=904 lang=javascript
 *
 * [904] Fruit Into Baskets
 */

// @lc code=start
/**
 * @param {number[]} fruits
 * @return {number}
 */
 var totalFruit = function (fruits) {
  const n = fruits.length;
  const k = 2;
  let l = 0;
  let r = 0;
  const freq = new Array(n).fill(0)
  let count = 0;
  let res = 0;
  while (r < n) {
    freq[fruits[r]]++
    if(freq[fruits[r]] === 1) count++
    while (count > k) {
      freq[fruits[l]]--
      if(freq[fruits[l]] === 0) count--
      l++;
    }
    res = Math.max(res, r - l + 1);
    r++;
  }
  return res
};

const getFreq = (map) => {
  let freq = 0;
  Object.keys(map).forEach((key) => {
    if (map[key] > 0) {
      freq += 1;
    }
  });
  return freq;
};
// @lc code=end
