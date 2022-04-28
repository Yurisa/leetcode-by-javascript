/*
 * @lc app=leetcode id=222 lang=javascript
 *
 * [222] Count Complete Tree Nodes
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
 var countNodes = function (root) {
  let hl = 0;
  let hr = 0;

  let nl = root;
  let nr = root;
  while (nl !== null) {
    nl = nl.left;
    hl++;
  }
  while (nr !== null) {
    nr = nr.right;
    hr++;
  }

  if (hr === hl) {
    return Math.pow(2, hl) - 1;
  }

  return 1 + countNodes(root.left) + countNodes(root.right);
};
// @lc code=end
