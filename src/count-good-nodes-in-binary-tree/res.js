/*
 * @lc app=leetcode id=1448 lang=javascript
 *
 * [1448] Count Good Nodes in Binary Tree
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
 var goodNodes = function (root) {
  let res = 0;
  // let prevGoodNode = root;
  traverse(root, root);

  function traverse(root, prevGoodNode) {
    if (root === null) return;
    if (root.val >= prevGoodNode.val) {
      prevGoodNode = root;
      res++;
    }
    traverse(root.left, prevGoodNode);
    traverse(root.right, prevGoodNode);
  }
  return res;
};
// @lc code=end
