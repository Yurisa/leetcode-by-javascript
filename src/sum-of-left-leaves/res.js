/*
 * @lc app=leetcode id=404 lang=javascript
 *
 * [404] Sum of Left Leaves
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
var sumOfLeftLeaves = function (root) {
  let leftLeaves = [];
  let sum = 0;

  function traverse(root) {
    if (root === null) return;
    const left = root.left;
    const right = root.right;

    if (left) {
      if (left.left === null && left.right === null) {
        leftLeaves.push(left.val);
      } else {
        traverse(left);
      }
    }

    traverse(right);
  }

  traverse(root)

  for (let v of leftLeaves) {
    sum += v;
  }
  return sum;
};
// @lc code=end
