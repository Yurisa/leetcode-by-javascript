/*
 * @lc app=leetcode id=814 lang=javascript
 *
 * [814] Binary Tree Pruning
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
var pruneTree = function (root) {
  function buildTree(root) {
    if (root === null) return null;
    root.left = buildTree(root.left);
    root.right = buildTree(root.right);

    if (!root.left && !root.right && root.val === 0) {
      return null;
    }
    return root;
  }
  return buildTree(root)
};
// @lc code=end
