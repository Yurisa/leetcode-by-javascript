/*
 * @lc app=leetcode id=979 lang=javascript
 *
 * [979] Distribute Coins in Binary Tree
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
 var distributeCoins = function (root) {
  let ret = 0;
  // 返回这个棵树中多出或者缺少的硬币
  function getRest(root) {
    if (root === null) return 0;
    const left = getRest(root.left);
    const right = getRest(root.right);

    ret += Math.abs(left) + Math.abs(right) + root.val - 1;
    return left + right + root.val - 1;
  }
  getRest(root);
  return ret;
};
// @lc code=end
