/*
 * @lc app=leetcode id=606 lang=javascript
 *
 * [606] Construct String from Binary Tree
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
 * @return {string}
 */
 var tree2str = function (root) {
  function buildStr(node) {
    if (node === null) return '()';

    const leftStr = buildStr(node.left);
    const rightStr = buildStr(node.right);
    let unionStr = leftStr + rightStr;
    if (node.left !== null && node.right === null) {
      unionStr = leftStr;
    } else if (node.left === null && node.right === null) {
      unionStr = '';
    }

    if (node === root) {
      return node.val + unionStr;
    }

    return '(' + node.val + unionStr + ')';
  }
  return buildStr(root)
};
// @lc code=end
