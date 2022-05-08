/*
 * @lc app=leetcode id=1110 lang=javascript
 *
 * [1110] Delete Nodes And Return Forest
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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function (root, to_delete) {
  const res = [];

  function traverse(root, hasParent) {
    if (root === null) return null;

    const deleted = to_delete.includes(root.val);
    // 如果本节点不删除且父节点删除就放入
    if (!deleted && !hasParent) {
      res.push(root);
    }
    const left = traverse(root.left, !deleted);
    const right = traverse(root.right, !deleted);
    root.left = left;
    root.right = right;

    return deleted ? null : root;
  }

  traverse(root, false);
  return res;
};
// @lc code=end
