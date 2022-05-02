/*
 * @lc app=leetcode id=958 lang=javascript
 *
 * [958] Check Completeness of a Binary Tree
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
 * @return {boolean}
 */
 var isCompleteTree = function (root) {
  const quene = [root];
  let end = false;
  while (quene.length) {
    let levelSize = quene.length;

    while (levelSize--) {
      const node = quene.shift();
      // 第一次遇到空时置成true
      if (node === null) {
        end = true;
      } else {
        
        if (end) {
          return false;
        }
        quene.push(node.left);
        quene.push(node.right);
      }
    }
  }
  return end;
};
// @lc code=end
