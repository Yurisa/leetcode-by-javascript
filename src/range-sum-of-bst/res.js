/*
 * @lc app=leetcode id=938 lang=javascript
 *
 * [938] Range Sum of BST
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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
 var rangeSumBST = function (root, low, high) {
  let sum = 0;
  function traverse(root) {
    if (root === null) return;

    if (root.val > high) {
      traverse(root.left);
      return;
    }
    if (root.val < low) {
      traverse(root.right);
      return;
    }
    sum += root.val;
    traverse(root.left);
    traverse(root.right);
  }
  traverse(root);
  return sum;
};
// @lc code=end
