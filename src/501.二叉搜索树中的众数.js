/*
 * @lc app=leetcode.cn id=501 lang=javascript
 *
 * [501] 二叉搜索树中的众数
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
  if (!root) return [];
  const ans = [];
  let max = Number.MIN_VALUE;
  let prev = null;
  const map = {};

  function traverse(root) {
    if (!root) return;

    traverse(root.left);
    if (!map[root.val]) {
      map[root.val] = 0;
    }
    map[root.val]++;
    if (map[root.val] > max) {
      max = map[root.val];
    }

    traverse(root.right);
  }

  traverse(root);

  Object.keys(map).forEach((key) => {
    if (map[key] === max) {
      ans.push(key);
    }
  });
  return ans;
};
// @lc code=end
