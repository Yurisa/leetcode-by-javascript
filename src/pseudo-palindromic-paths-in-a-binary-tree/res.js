/*
 * @lc app=leetcode id=1457 lang=javascript
 *
 * [1457] Pseudo-Palindromic Paths in a Binary Tree
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
 var pseudoPalindromicPaths = function (root) {
  const count = Array.from({ length: 10 }, () => 0);
  let res = 0;
  traverse(root);
  function traverse(root) {
    if (root === null) return;

    // 在叶子节点处理
    if (root.left === null && root.right === null) {
      count[root.val]++;
      let odd = 0;
      for (const n of count) {
        if (n % 2 === 1) {
          odd++;
        }
      }
      if (odd <= 1) {
        res++;
      }
      count[root.val]--;
      return 
    }

    count[root.val]++;
    traverse(root.left);
    traverse(root.right);
    count[root.val]--;
  }
  return res;
};
// @lc code=end
