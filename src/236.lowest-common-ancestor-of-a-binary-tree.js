/*
 * @lc app=leetcode id=236 lang=javascript
 *
 * [236] Lowest Common Ancestor of a Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  function find(root, p, q) {
    if (root === null) return null;
    if (p.val === root.val) {
      return root;
    }
    if (q.val === root.val) {
      return root;
    }
    const left = find(root.left, p, q);
    const right = find(root.right, p, q);
    if (left && right) return root;
    return left || right;
  }
  return find(root, p, q);
};
// @lc code=end
