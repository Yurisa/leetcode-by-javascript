/*
 * @lc app=leetcode id=1373 lang=javascript
 *
 * [1373] Maximum Sum BST in Binary Tree
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
 * @return {number}
 */
 var maxSumBST = function (root) {
  let maxSum = 0;
  traverse(root);
  function traverse(root) {
    if (root === null) {
      return [1, Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, 0];
    }
    
    const left = traverse(root.left);
    const right = traverse(root.right);

    const ret = new Array(4).fill(0);
    if (
      left[0] === 1 &&
      right[0] === 1 &&
      root.val > left[2] &&
      root.val < right[1]
    ) {
      ret[0] = 1;
      ret[1] = Math.min(root.val, left[1]);
      ret[2] = Math.max(root.val, right[2]);
      ret[3] = root.val + left[3] + right[3];
      maxSum = Math.max(ret[3], maxSum);
    } else {
      ret[0] = 0;
    }
    // console.log('ret', ret)
    return ret;
  }

  return maxSum
};
// @lc code=end
