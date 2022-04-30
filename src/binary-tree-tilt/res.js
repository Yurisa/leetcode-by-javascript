/*
 * @lc app=leetcode id=563 lang=javascript
 *
 * [563] Binary Tree Tilt
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
var findTilt = function (root) {
  let ret = 0;
  function sum(root) {
    if (root === null) return 0;

    const leftSum = sum(root.left);
    const rightSum = sum(root.right);
    ret += Math.abs(leftSum - rightSum);

    return root.val + leftSum + rightSum;
  }

  sum(root);
  return ret;
};

// @lc code=end
