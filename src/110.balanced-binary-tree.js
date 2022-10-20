/*
 * @lc app=leetcode id=110 lang=javascript
 *
 * [110] Balanced Binary Tree
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
var isBalanced = function (root) {
  function maxDep(root) {
    if (!root) return [0, true];
    const [leftDep, leftRes] = maxDep(root.left);
    const [rightDep, rightRes] = maxDep(root.right);

    return [
      Math.max(leftDep, rightDep) + 1,
      leftRes && rightRes && Math.abs(leftDep - rightDep) <= 1,
    ];
  }

  return maxDep(root)[1];
};
// @lc code=end
