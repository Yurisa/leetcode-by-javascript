/*
 * @lc app=leetcode id=1104 lang=javascript
 *
 * [1104] Path In Zigzag Labelled Binary Tree
 */

// @lc code=start
/**
 * @param {number} label
 * @return {number[]}
 */
var pathInZigZagTree = function (label) {
  let depth = 0;
  let ztagFlag = false;
  function traverse(root) {
    
    traverse(root.left);
    traverse(root.right);
  }
};
// @lc code=end
