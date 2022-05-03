/*
 * @lc app=leetcode id=2236 lang=javascript
 *
 * [2236] Root Equals Sum of Children
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
 var checkTree = function (root) {
  return ((root.right.val + root.left.val) === root.val) ? true : false;
};
// @lc code=end
