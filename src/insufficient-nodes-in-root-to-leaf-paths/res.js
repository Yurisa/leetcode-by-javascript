/*
 * @lc app=leetcode id=1080 lang=javascript
 *
 * [1080] Insufficient Nodes in Root to Leaf Paths
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
 * @param {number} limit
 * @return {TreeNode}
 */
 var sufficientSubset = function (root, limit) {
  function traverse(root, preSum) {
    if (root === null) return null;

    if (root.left === null && root.right === null) {
      if (preSum + root.val < limit) {
        return null;
      }
      return root;
    }
    preSum += root.val;
    const left = traverse(root.left, preSum);
    const right = traverse(root.right, preSum);

    if (left == null && right == null) {
      return null;
    }

    root.left = left;
    root.right = right;

    return root;
  }

  return traverse(root, 0);
};
// @lc code=end
