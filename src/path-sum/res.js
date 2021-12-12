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
 * @return {boolean}
 */
 var hasPathSum = function (root, targetSum) {
  if (!root || root.val === null) return false;
  let temp = targetSum - root.val;

  if (temp === 0 && !root.left && !root.right) {
    return true;
  }
  return hasPathSum(root.left, temp) || hasPathSum(root.right, temp);
};
