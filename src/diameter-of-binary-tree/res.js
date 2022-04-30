/*
 * @lc app=leetcode id=543 lang=javascript
 *
 * [543] Diameter of Binary Tree
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
 var diameterOfBinaryTree = function (root) {
  let maxDiameter = 0;
  function getDepth(root) {
    if (root === null) return 0;

    const leftDepth = getDepth(root.left);
    const rightDepth = getDepth(root.right);
    maxDiameter = Math.max(maxDiameter, leftDepth + rightDepth);
    return 1 + Math.max(leftDepth, rightDepth);
  }
  getDepth(root);
  return maxDiameter;
};
// @lc code=end
