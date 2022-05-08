/*
 * @lc app=leetcode id=1038 lang=javascript
 *
 * [1038] Binary Search Tree to Greater Sum Tree
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
 * @return {TreeNode}
 */
 var bstToGst = function (root) {
  const sum = getSum(root);
  let prevSum = 0;

  function traverse(root) {
    if (root === null) return;

    traverse(root.left);
    const tmp = root.val;
    root.val = sum - prevSum;
    prevSum += tmp;
    traverse(root.right);
  }

  traverse(root);
  return root;
};

function getSum(root) {
  if (root === null) return 0;
  const left = getSum(root.left);
  const right = getSum(root.right);

  return left + right + root.val;
}
// @lc code=end
