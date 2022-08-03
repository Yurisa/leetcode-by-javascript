/*
 * @lc app=leetcode id=105 lang=javascript
 *
 * [105] Construct Binary Tree from Preorder and Inorder Traversal
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  function build(preoder, preStart, preEnd, inorder, inStart, inEnd) {
    if (preStart > preEnd) return null;

    const rootVal = preorder[preStart];

    let index = -1;
    for (let i = 0; i < inorder.length; i++) {
      if (inorder[i] === rootVal) {
        index = i;
        break;
      }
    }

    const root = new TreeNode(rootVal);

    const leftSize = index - inStart;

    root.left = build(
      preorder,
      preStart + 1,
      preStart + leftSize,
      inorder,
      inStart,
      index - 1,
    );

    root.right = build(
      preoder,
      preStart + leftSize + 1,
      preEnd,
      inorder,
      index + 1,
      inEnd,
    );

    return root;
  }

  return build(
    preorder,
    0,
    preorder.length - 1,
    inorder,
    0,
    inorder.length - 1,
  );
};
// @lc code=end
