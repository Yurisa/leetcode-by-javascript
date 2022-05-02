/*
 * @lc app=leetcode id=965 lang=javascript
 *
 * [965] Univalued Binary Tree
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
 var isUnivalTree = function (root) {
  if (root === null) return true;
  let prevVal = root.val;
  let ret = true;
  function traverse(root) {
    if (root === null) return;

    if (prevVal !== root.val) {
      ret = false;
    }
    prevVal = root.val;
    traverse(root.left);
    traverse(root.right);
  }
  traverse(root);
  return ret;
};
// @lc code=end
