/*
 * @lc app=leetcode id=1325 lang=javascript
 *
 * [1325] Delete Leaves With a Given Value
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
 * @param {number} target
 * @return {TreeNode}
 */
 var removeLeafNodes = function (root, target) {

  if(root === null) return null
  root.left = removeLeafNodes(root.left, target);
  root.right =  removeLeafNodes(root.right, target);
   if (target === root.val && root.left === null && root.right === null) {
      root = null;
   }
  return root;
};
// @lc code=end
