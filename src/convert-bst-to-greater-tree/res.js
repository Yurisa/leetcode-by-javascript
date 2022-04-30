/*
 * @lc app=leetcode id=538 lang=javascript
 *
 * [538] Convert BST to Greater Tree
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
 var convertBST = function (root) {
  let sum = 0;
  function traverse(root) {
    if (root === null) return;
    traverse(root.right);
    sum += root.val;
    root.val = sum;
    traverse(root.left);
  }
  traverse(root);
  return root;
};
// @lc code=end
