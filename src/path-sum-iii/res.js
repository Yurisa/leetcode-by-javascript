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
  let ret = 0;
  let pathSum = 0;
  const preSumMap = { 0: 1 };
  function traverse(root) {
    if (root === null) return;

    pathSum += root.val;
    ret += preSumMap[pathSum - targetSum] || 0;
    preSumMap[pathSum] = (preSumMap[pathSum] || 0) + 1;

    traverse(root.left);
    traverse(root.right);

    // 后缀位置标识子树遍历完毕，需要维护pathSum和preSumMap
    pathSum -= root.val;
    preSumMap[pathSum] -= preSumMap[pathSum] - 1;
  }
  traverse(root);
  return ret;
};
// @lc code=end
