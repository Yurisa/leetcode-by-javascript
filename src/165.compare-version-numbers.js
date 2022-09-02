/*
 * @lc app=leetcode id=165 lang=javascript
 *
 * [165] Compare Version Numbers
 */

// @lc code=start
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
  const vers1 = version1.split('.');
  const vers2 = version2.split('.');
  let len = Math.max(vers1.length, vers2.length);
  for(let i = 0; i < len; i++) {
      let x = 0;
      let y = 0;
      if (i < vers1.length) {
          x = parseInt(vers1[i])
      }
      if(i < vers2.length) {
          y = parseInt(vers2[i])
      }

      if(x > y) {
          return 1
      } else if (x < y) {
          return -1
      }
  }
  return 0
};
// @lc code=end

