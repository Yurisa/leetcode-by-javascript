/*
 * @lc app=leetcode id=129 lang=javascript
 *
 * [129] Sum Root to Leaf Numbers
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
var sumNumbers = function (root) {
  const paths = [];
  let sum = 0;
  function dfs(root, s) {
    const _s = s + root.val;
    if (!root.left && !root.right) {
      paths.push(_s);
      return;
    }
    root.left && dfs(root.left, _s);
    root.right && dfs(root.right, _s);
  }
  dfs(root, '');
  for (let path of paths) {
    sum += parseInt(path, 10);
  }
  return sum
};
// @lc code=end
