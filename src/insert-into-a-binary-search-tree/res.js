/*
 * @lc app=leetcode id=701 lang=javascript
 *
 * [701] Insert into a Binary Search Tree
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
 * @param {number} val
 * @return {TreeNode}
 */
 var insertIntoBST = function (root, val) {
  if (root === null) return new TreeNode(val);
  if (root.val < val) {
    root.right = insertIntoBST(root.right, val);
  }
  if (root.val > val) {
    root.left = insertIntoBST(root.left, val);
  }
  return root;
};
// @lc code=end
