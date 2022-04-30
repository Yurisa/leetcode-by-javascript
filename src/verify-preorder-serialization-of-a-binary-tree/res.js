/*
 * @lc app=leetcode id=331 lang=javascript
 *
 * [331] Verify Preorder Serialization of a Binary Tree
 */

// @lc code=start
/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function (preorder) {
  let edge = 1;
  const nodes = preorder.split(',');

  for (const node of nodes) {
    if (node === '#') {
      // 空节点消耗一条边
      edge -= 1;

      if (edge < 0) {
        return false;
      }
    } else {
      edge -= 1;
      if (edge < 0) {
        return false;
      }
      edge += 2;
    }
  }
  return edge === 0;
};
// @lc code=end
