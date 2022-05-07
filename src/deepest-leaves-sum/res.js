/*
 * @lc app=leetcode id=1302 lang=javascript
 *
 * [1302] Deepest Leaves Sum
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
 var deepestLeavesSum = function (root) {
  if(root === null) return 0
  const ret = traverse(root);
  function traverse(root) {
    if (root === null) {
      return [0, 0];
    }

    if (root.left === null && root.right === null) {
      return [1, root.val]
    }

    const left = traverse(root.left);
    const right = traverse(root.right);

    const maxDepth = (left[0] > right[0] ? left[0] : right[0]) + 1;
    let sum = 0;
    if (left[0] > right[0]) {
      sum = left[1];
    } else if (left[0] < right[0]) {
      sum = right[1];
    } else {
      sum = left[1] + right[1];
    }

    return [maxDepth, sum];
  }
  return ret[1];
};
// @lc code=end
