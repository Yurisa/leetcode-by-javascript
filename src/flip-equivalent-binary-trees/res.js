/*
 * @lc app=leetcode id=951 lang=javascript
 *
 * [951] Flip Equivalent Binary Trees
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
 var flipEquiv = function (root1, root2) {
  let flag = false;
  function isFlipEquiv(root1, root2) {
    if (root1 === null && root2 === null) {
      return true;
    }
    if (root1 === null || root2 === null) return false;

    return (
      (root1.val === root2.val &&
        isFlipEquiv(root1.left, root2.right) &&
        isFlipEquiv(root1.right, root2.left)) ||
      (isFlipEquiv(root1.left, root2.left) &&
        isFlipEquiv(root1.right, root2.right))
    );
  }
  return isFlipEquiv(root1, root2);
};
// @lc code=end
