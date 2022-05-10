/*
 * @lc app=leetcode id=1145 lang=javascript
 *
 * [1145] Binary Tree Coloring Game
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
 * @param {number} n
 * @param {number} x
 * @return {boolean}
 */
 var btreeGameWinningMove = function (root, n, x) {
  const node = find(root, x);
  const leftCount = count(node.left);
  const rightCount = count(node.right);
  const otherCount = n - 1 - leftCount - rightCount;

  function find(root, target) {
    if (root === null) return null;
    if (root.val === target) {
      return root;
    }
    return find(root.left, target) || find(root.right, target);
  }
  function count(root) {
    if (root === null) return 0;

    return count(root.left) + count(root.right) + 1;
  }

  return (
    Math.max(leftCount, Math.max(rightCount, otherCount)) > parseInt(n / 2)
  );
};
// @lc code=end
