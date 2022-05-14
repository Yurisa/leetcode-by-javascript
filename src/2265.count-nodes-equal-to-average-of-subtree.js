/*
 * @lc app=leetcode id=2265 lang=javascript
 *
 * [2265] Count Nodes Equal to Average of Subtree
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
 var averageOfSubtree = function (root) {
  let res = 0;
  function getSumAndNum(root) {
    if (root === null) return [0, 0];

    const [leftSum, leftNum] = getSumAndNum(root.left);
    const [rightSum, rightNum] = getSumAndNum(root.right);

    const n = leftNum + rightNum + 1;
    const sum = leftSum + rightSum + root.val;
    const avg = Math.floor(sum / n);
    if (avg === root.val) {
      res++;
    }
    return [sum, n];
  }
  getSumAndNum(root);
  return res;
};
// @lc code=end
