/*
 * @lc app=leetcode id=894 lang=javascript
 *
 * [894] All Possible Full Binary Trees
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
 * @param {number} n
 * @return {TreeNode[]}
 */
 var allPossibleFBT = function (n) {
  const memo = {};
  function buildTree(n) {
    const res = [];
    if (n === 1) {
      res.push(new TreeNode(0));
      return res;
    }

    if (memo[n]) {
      return memo[n];
    }

    // 满二叉树的限制，现在构造左右子树
    for (let i = 1; i < n; i += 2) {
      let j = n - i - 1;

      const leftRes = buildTree(i);
      const rightRes = buildTree(j);

      for (const left of leftRes) {
        for (const right of rightRes) {
          const root = new TreeNode(0);
          root.left = left;
          root.right = right;

          res.push(root);
        }
      }
    }
    memo[n] = res;
    return res;
  }

  return buildTree(n)
};
// @lc code=end
