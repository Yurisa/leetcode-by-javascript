/*
 * @lc app=leetcode id=2264 lang=javascript
 *
 * [2264] Largest 3-Same-Digit Number in String
 */

// @lc code=start
/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function (num) {
  const k = 3;
  let res = "";
  let windowSize = 0;
  const map = new Map();
  for (let i = 0; i < num.length; i++) {
    const number = num[i];
    if (!map.has(number)) {
      map.set(number, 0);
    }
    map.set(number, map.get(number) + 1);
    windowSize++;
    const result = check(map, k);
    if (result !== "") {
      res = res > result ? res : result;
    }
    if (windowSize >= k) {
      windowSize--;
      map.set(num[i - k + 1], map.get(num[i - k + 1]) - 1);
    }
  }
  return res;
};

function check(map, k) {
  for (const key of map.keys()) {
    if (map.get(key) === k) {
      console.log("进入到这", key);
      return key.repeat(k);
    }
  }
  return "";
}
// @lc code=end
