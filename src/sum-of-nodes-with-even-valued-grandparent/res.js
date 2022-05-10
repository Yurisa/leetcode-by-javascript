/*
 * @lc app=leetcode id=1315 lang=javascript
 *
 * [1315] Sum of Nodes with Even-Valued Grandparent
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
 var sumEvenGrandparent = function (root) {
  let res = 0;
  function traverse(root, parent, grandparent) {
    if (root === null) return;

    if (grandparent !== null && grandparent.val % 2 === 0) {
      res += root.val;
    }
    traverse(root.left, root, parent)
    traverse(root.right, root, parent)
  }
  traverse(root, null, null)
  return res
};
// @lc code=end
