/*
 * @lc app=leetcode id=257 lang=javascript
 *
 * [257] Binary Tree Paths
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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  let ret = [];
  function traverse(root, path) {
    if (root === null) return;
    path.push(root.val);
    if (root.left === null && root.right === null) {
      ret.push(path.join('->'));
      return;
    }
    traverse(root.left, [...path]);
    traverse(root.right, [...path]);
  }
  traverse(root, []);
  return ret;
};
// @lc code=end
