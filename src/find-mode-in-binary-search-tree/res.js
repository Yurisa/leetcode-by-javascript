/*
 * @lc app=leetcode id=501 lang=javascript
 *
 * [501] Find Mode in Binary Search Tree
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
 * @return {number[]}
 */
var findMode = function (root) {
  const map = {};
  function traverse(root) {
    if (root === null) return;

    map[root.val] = (map[root.val] || 0) + 1;
    traverse(root.left);
    traverse(root.right);
  }
  traverse(root);
  const countsMap = {};
  Object.keys(map).forEach((key) => {
    if (!countsMap[map[key]]) {
      countsMap[map[key]] = [];
    }
    countsMap[map[key]].push(key);
  });
  const sortedList = Object.keys(countsMap).sort((a, b) => b - a);
  return countsMap[sortedList[0]];
};
// @lc code=end
