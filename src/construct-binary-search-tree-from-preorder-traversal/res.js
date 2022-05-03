/*
 * @lc app=leetcode id=1008 lang=javascript
 *
 * [1008] Construct Binary Search Tree from Preorder Traversal
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
 * @return {TreeNode}
 */
 var bstFromPreorder = function (preorder) {
  // 定义：将 preorder[start..end] 区间内的元素生成 BST，并返回根节点
  function buildTree(preorder, start, end) {
    if (start > end) return null;
    const rootVal = preorder[start];

    const root = new TreeNode(rootVal);

    // 声明p成为左右子树的分界点
    let p = start + 1;
    while (p <= end && preorder[p] < rootVal) {
      p++;
    }
    root.left = buildTree(preorder, start + 1, p - 1);
    root.right = buildTree(preorder, p, end);

    return root;
  }

  return buildTree(preorder, 0, preorder.length - 1);
};
// @lc code=end
