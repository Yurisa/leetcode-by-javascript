/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
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
var isSymmetric = function (root) {
  if (root === null) return true;
  function check(left, right) {
    if (left == null || right == null) return left == right;
    if (left.val !== right.val) return false;
    return check(left.right, right.left) && check(right.right, left.left);
  }
  return check(root.left, root.right);
};
// @lc code=end
