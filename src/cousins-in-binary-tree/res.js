/*
 * @lc app=leetcode id=993 lang=javascript
 *
 * [993] Cousins in Binary Tree
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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
 var isCousins = function (root, x, y) {
  let depth = 0;
  let parentX = null;
  let parentY = null;
  let depthX = 0;
  let depthY = 0;
  function traverse(root, parent) {
    if (root === null) return;

    if (root.val === x) {
      parentX = parent;
      depthX = depth;
    }

    if (root.val === y) {
      parentY = parent;
      depthY = depth;
    }

    depth++;
    traverse(root.left, root);
    traverse(root.right, root);
    depth--;
  }

  traverse(root, null);

  if (depthX === depthY && parentX !== parentY) {
    return true;
  }
  return false;
};
// @lc code=end
