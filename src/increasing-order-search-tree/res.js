/*
 * @lc app=leetcode id=897 lang=javascript
 *
 * [897] Increasing Order Search Tree
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
 var increasingBST = function (root) {
  let newRoot = null;
  let prev = null;
  function traverse(root) {
    if (root === null) return;
    traverse(root.left);
    const node = new TreeNode(root.val);
    if (newRoot === null) {
      prev = node;
      newRoot = node;
    } else {
      prev.right = node;
      prev = node;
    }

    traverse(root.right);
  }
  traverse(root);
  return newRoot;
};
// @lc code=end
