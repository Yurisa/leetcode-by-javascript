/*
 * @lc app=leetcode id=450 lang=javascript
 *
 * [450] Delete Node in a BST
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  if (root === null) return null;

  if (root.val === key) {
    // 单个节点的情况或者没有子节点的情况
    if (root.left === null) return root.right;
    if (root.right === null) return root.left;

    // 双节点，需要得到右子树的最小值交换即最左边的叶子节点
    const minNode = getMin(root.right);

    root.val = minNode.val;
    root.right = deleteNode(root.right, minNode.val)

  }

  if (root.val > key) {
    root.left = deleteNode(root.left, key);
  }

  if (root.val < key) {
    root.right = deleteNode(root.right, key);
  }
  return root;
};

function getMin(node) {
  while (node.left !== null) {
    node = node.left;
  }
  return node;
}
// @lc code=end
