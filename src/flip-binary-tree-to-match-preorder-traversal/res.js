/*
 * @lc app=leetcode id=971 lang=javascript
 *
 * [971] Flip Binary Tree To Match Preorder Traversal
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
 * @param {number[]} voyage
 * @return {number[]}
 */
 var flipMatchVoyage = function (root, voyage) {
  let canFlip = true;
  const ret = [];
  // i表示当前遍历到voyage哪个位置
  let i = 0;
  function traverse(root) {
    if (root === null || !canFlip) return;

    if (root.val !== voyage[i++]) {
      canFlip = false;
      return;
    }

    // 先判断左子树是否与voyage相同
    if (root.left !== null && root.left.val !== voyage[i]) {
      let temp = root.left;
      root.left = root.right;
      root.right = temp;

      ret.push(root.val);
    }
    // 翻转完毕继续遍历
    traverse(root.left);
    traverse(root.right);
  }
  traverse(root);

  if (canFlip) {
    return ret;
  }
  return [-1];
};
// @lc code=end
