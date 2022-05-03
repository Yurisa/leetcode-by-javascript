/*
 * @lc app=leetcode id=1026 lang=javascript
 *
 * [1026] Maximum Difference Between Node and Ancestor
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var maxAncestorDiff = function (root) {
  let ret = 0;
  function getMinMax(root) {
    if (root === null) {
      return [Number.MAX_VALUE, Number.MIN_VALUE];
    }

    const leftMinMax = getMinMax(root.left);
    const rightMinMax = getMinMax(root.right);
    const rootMin = min(root.val, leftMinMax[0], rightMinMax[0]);
    const rootMax = max(root.val, leftMinMax[1], rightMinMax[1]);

    ret = max(ret, rootMax - root.val, root.val - rootMin);
    return [rootMin, rootMax];
  }
  getMinMax(root);
  return ret;
};

function min(a, b, c) {
  return Math.min(Math.min(a, b), c);
}

function max(a, b, c) {
  return Math.max(Math.max(a, b), c);
}
// @lc code=end
