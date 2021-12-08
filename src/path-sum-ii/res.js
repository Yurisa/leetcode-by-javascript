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
 * @return {number[][]}
 */
 var pathSum = function (root, targetSum) {
  const result = [];
  traverse(root, [], targetSum);
  function traverse(node, arr, temp) {
    if (!node) return;
    if (temp - node.val === 0 && !node.left && !node.right) {
      result.push(arr.concat(node.val));
      return;
    }
    if (node.left) {
      traverse(node.left, arr.concat(node.val), temp - node.val);
    }
    if (node.right) {
      traverse(node.right, arr.concat(node.val), temp - node.val);
    }
  }
  return result;
};
