/*
 * @lc app=leetcode id=998 lang=javascript
 *
 * [998] Maximum Binary Tree II
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
 * @param {number} val
 * @return {TreeNode}
 */
 var insertIntoMaxTree = function (root, val) {
  if (root === null) return new TreeNode(val);

  if (root.val < val) {
    let temp = root;
    root = new TreeNode(val);
    root.left = temp;
  } else {
    root.right = insertIntoMaxTree(root.right, val);
  }
  return root;
};
// @lc code=end
