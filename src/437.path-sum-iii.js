/*
 * @lc app=leetcode id=437 lang=javascript
 *
 * [437] Path Sum III
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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
  if (!root) return 0;
  let ret = 0;
  ret += rootSum(root, targetSum);
  ret += pathSum(root.left, targetSum);
  ret += pathSum(root.right, targetSum);
  return ret;
};

function rootSum(root, targetSum) {
  if (!root) return 0;

  let ret = 0;
  if (targetSum === root.val) {
    ret++;
  }

  ret += rootSum(root.left, targetSum - root.val);
  ret += rootSum(root.right, targetSum - root.val);
  return ret;
}
// @lc code=end
