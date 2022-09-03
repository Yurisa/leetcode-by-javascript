/*
 * @lc app=leetcode id=112 lang=javascript
 *
 * [112] Path Sum
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  function traverse(root, rest) {
    if (!root) return false;

    if (!root.left && !root.right) {
      return rest === root.val;
    }

    return (
      traverse(root.left, rest - root.val) ||
      traverse(root.right, rest - root.val)
    );
  }
  return traverse(root, targetSum);
};
// @lc code=end
