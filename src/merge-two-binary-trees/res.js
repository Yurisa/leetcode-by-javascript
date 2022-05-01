/*
 * @lc app=leetcode id=617 lang=javascript
 *
 * [617] Merge Two Binary Trees
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
 var mergeTrees = function (root1, root2) {
  function buildTree(node1, node2) {
    if (node1 === null) return node2;
    if (node2 === null) return node1;

    const root = new TreeNode(node1.val + node2.val);
    root.left = buildTree(node1.left, node2.left);
    root.right = buildTree(node1.right, node2.right);

    return root;
  }

  return buildTree(root1, root2);
};
// @lc code=end
