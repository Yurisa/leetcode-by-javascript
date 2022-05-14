/*
 * @lc app=leetcode id=2266 lang=javascript
 *
 * [2266] Count Number of Texts
 */

// @lc code=start
/**
 * @param {string} pressedKeys
 * @return {number}
 */
var countTexts = function (pressedKeys) {
  let res = 1;
  let right = 0;
  let left = 0;
  const map = {
    0: 1,
    1: 1,
    2: 2,
    3: 4,
    4: 8,
  };
  const n = pressedKeys.length;
  const window = [];
  while (right < n) {
    window.push(pressedKeys[right]);
    while (pressedKeys[right] !== pressedKeys[left]) {
      left++;
      window.shift();
    }
    right++;
    if (window.length && pressedKeys[right] !== pressedKeys[left]) {
      const len = window.length;
      const char = window[0];
      let result = 1
      if (char === "7" || char === "9") {
        const a = Math.floor(len / 4);
        const b = len % 4;

        for (let i = 0; i < a; i++) {
          result *= map[4];
        }
        result *= map[b];
      } else {
        const a = Math.floor(len / 3);
        const b = len % 3;

        for (let i = 0; i < a; i++) {
          result *= map[3];
        }
        result *= map[b];
      }
      res *= result
    }
  }
  return res % (1e9 + 7);
};
// @lc code=end
