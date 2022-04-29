/*
 * @lc app=leetcode id=226 lang=javascript
 *
 * [226] Invert Binary Tree
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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  function invert(root) {
    if (root === null) return;
    let tmp = root.left;
    root.left = root.right;
    root.right = tmp;
    invert(root.left);
    invert(root.right);
  }
  invert(root)
  return root;
};
// @lc code=end
