/*
 * @lc app=leetcode id=652 lang=javascript
 *
 * [652] Find Duplicate Subtrees
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
 * @return {TreeNode[]}
 */
 var findDuplicateSubtrees = function (root) {
  const duplicateSubtrees = {};
  const ret = [];

  function traverse(root) {
    if (root === null) return '#';
    const left = traverse(root.left);
    const right = traverse(root.right);

    const subtree = root.val + ',' + left + ',' + right;
    
    if (!duplicateSubtrees[subtree]) {
      duplicateSubtrees[subtree] = 0;
    }
    // 1代表出现两次即只往结果中添加一次
    if (duplicateSubtrees[subtree] === 1) {
      ret.push(root);
    }
    duplicateSubtrees[subtree] = duplicateSubtrees[subtree] + 1;
    return subtree;
  }
  traverse(root);
  return ret;
};
// @lc code=end
