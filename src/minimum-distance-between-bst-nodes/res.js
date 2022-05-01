/*
 * @lc app=leetcode id=783 lang=javascript
 *
 * [783] Minimum Distance Between BST Nodes
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
 var minDiffInBST = function (root) {
  let prev = null;
  let minDiff = Number.MAX_VALUE;

  function traverse(root) {
    if (root === null) return;
    traverse(root.left);

    if (prev !== null) {
      minDiff = Math.min(minDiff, Math.abs(prev.val - root.val));
    }
    prev = root;
    traverse(root.right);
  }
  traverse(root);
  return minDiff;
};
// @lc code=end
