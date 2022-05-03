/*
 * @lc app=leetcode id=1022 lang=javascript
 *
 * [1022] Sum of Root To Leaf Binary Numbers
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
 var sumRootToLeaf = function (root) {
  const paths = [];

  let sum = 0;
  function traverse(root, path) {
    if (root === null) {
      return;
    }
    let newPath = path + root.val;

    if (root.left === null && root.right === null) {
      paths.push(newPath);
      return;
    }
    traverse(root.left, newPath);
    traverse(root.right, newPath);
  }
  traverse(root, '');
  for (const num of paths) {
    sum += parseInt(num, 2);
  }
  return sum;
};
// @lc code=end
