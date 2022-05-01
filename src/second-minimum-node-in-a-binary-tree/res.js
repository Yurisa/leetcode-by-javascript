/*
 * @lc app=leetcode id=671 lang=javascript
 *
 * [671] Second Minimum Node In a Binary Tree
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
 var findSecondMinimumValue = function (root) {
  if (root.left == null && root.right == null) {
    return -1;
  }

  let leftVal = root.left.val;
  let rightVal = root.right.val;
  if (root.val === leftVal) {
    leftVal = findSecondMinimumValue(root.left);
  }

  if (root.val === rightVal) {
    rightVal = findSecondMinimumValue(root.right);
  }

  if (leftVal === -1) {
    return rightVal;
  }

  if (rightVal === -1) {
    return leftVal;
  }
  return Math.min(leftVal, rightVal);
};
// @lc code=end
