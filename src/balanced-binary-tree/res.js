/*
 * @lc app=leetcode id=110 lang=javascript
 *
 * [110] Balanced Binary Tree
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
 * @return {boolean}
 */
var isBalanced = function (root) {
  let isBalanced = true;
  if (root === null) return isBalanced;
  function maxDepth(root) {
    if (root === null) return 0;
    const leftMaxDepth = maxDepth(root.left);
    const rightMaxDepth = maxDepth(root.right);

    if (Math.abs(leftMaxDepth - rightMaxDepth) > 1) {
      isBalanced = false;
    }
    return 1 + Math.max(leftMaxDepth, rightMaxDepth);
  }
  maxDepth(root);
  return isBalanced;
};
// @lc code=end
