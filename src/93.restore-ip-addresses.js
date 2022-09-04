/*
 * @lc app=leetcode id=93 lang=javascript
 *
 * [93] Restore IP Addresses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  const n = s.length;
  const path = [];
  const result = [];
  function backtrack(start) {
    if (path.length === 4) {
      if (path.join("") !== s) {
        return;
      } else {
        if (start <= n) {
          result.push([...path].join("."));
        }
        return;
      }
    }
    for (let i = 0; i < 3; i++) {
      if (i === 0) {
        path.push(s[start]);
        backtrack(start + 1);
        path.pop();
      } else if (i === 1) {
        if (s[start] !== "0") {
          path.push(s.slice(start, start + 2));
          backtrack(start + 2);
          path.pop();
        }
      } else if (i === 2) {
        if (s[start] !== "0") {
          const s1 = s.slice(start, start + 3);
          if (s1 - 0 <= 255) {
            path.push(s1);
            backtrack(start + 3);
            path.pop();
          }
        }
      }
    }
  }
  backtrack(0);
  return result;
};
// @lc code=end
