/*
 * @lc app=leetcode id=872 lang=javascript
 *
 * [872] Leaf-Similar Trees
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
 * @return {boolean}
 */
 var leafSimilar = function (root1, root2) {
  function getLeaves(root) {
    let leaves = '';
    function traverse(root) {
      if (root === null) return;

      if (root.left === null && root.right === null) {
        leaves += (root.val + ',');
        return;
      }

      traverse(root.left);
      traverse(root.right);
    }
    traverse(root);
    return leaves;
  }

  return getLeaves(root1) === getLeaves(root2);
};
// @lc code=end
