/*
 * @lc app=leetcode id=530 lang=javascript
 *
 * [530] Minimum Absolute Difference in BST
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
 var getMinimumDifference = function (root) {
  let ret = Number.MAX_VALUE;
  let prev = null;

  function traverse(root) {
    if (root === null) return;

    traverse(root.left);
    if (prev) {
      ret = Math.min(ret, Math.abs(root.val - prev.val));
    }
    prev = root;
    traverse(root.right);
  }

  traverse(root);
  return ret;
};
// @lc code=end
