/*
 * @lc app=leetcode.cn id=337 lang=javascript
 *
 * [337] 打家劫舍 III
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
 * 解法一： 二叉树解法 垃圾js超出时间限制
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function (root) {
  if (root === null) return 0;
  // 选择根节点和孙子节点
  let money = root.val;
  if (root.left) {
    money += rob(root.left.left) + rob(root.left.right);
  }

  if (root.right) {
    money += rob(root.right.left) + rob(root.right.right);
  }
  // 选择儿子节点
  return Math.max(money, rob(root.left) + rob(root.right));
};
/**
 * 解法二： 二叉树解法+增加记忆化搜索
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function (root) {
  const memo = new Map();
  function _rob(root) {
    if (root === null) return 0;
    if (memo.has(root)) return memo.get(root);
    // 选择根节点和孙子节点
    let money = root.val;
    if (root.left) {
      money += _rob(root.left.left) + _rob(root.left.right);
    }

    if (root.right) {
      money += _rob(root.right.left) + _rob(root.right.right);
    }
    // 选择儿子节点

    const v = Math.max(money, _rob(root.left) + _rob(root.right));
    memo.set(root, v);
    return v;
  }
  return _rob(root);
};

/**
 * 解法二： 二叉树解法+增加记忆化搜索
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function (root) {
  function _rob(root) {
    if (root === null) return [0, 0];
    const left = _rob(root.left);
    const right = _rob(root.right);
    let result = [0, 0];
    // 当前节点不选
    result[0] = Math.max(left[1], left[0]) + Math.max(right[0], right[1]);
    // 选择当前节点
    result[1] = left[0] + right[0] + root.val;
    return result;
  }
  // 0 代表不选择该节点 1代表选择该节点
  const result = _rob(root);
  return Math.max(result[0], result[1]);
};
// @lc code=end
