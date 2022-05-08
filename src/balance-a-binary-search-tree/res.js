/*
 * @lc app=leetcode id=1382 lang=javascript
 *
 * [1382] Balance a Binary Search Tree
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
 * @return {TreeNode}
 */
 var balanceBST = function (root) {
  const list = [];
  traverse(root);

  function traverse(root) {
    if (root === null) return;
    traverse(root.left);
    list.push(root.val);
    traverse(root.right);
  }

  function build(list, lo, hi) {
    if (lo > hi) return null;

    let mid = Math.floor(lo + (hi - lo) / 2);
    const root = new TreeNode(list[mid]);
    root.left = build(list, lo, mid - 1);
    root.right = build(list, mid + 1, hi);
    return root;
  }

  return build(list, 0, list.length - 1);
};
// @lc code=end
