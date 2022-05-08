/*
 * @lc app=leetcode id=968 lang=javascript
 *
 * [968] Binary Tree Cameras
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
 var minCameraCover = function (root) {
  let res = 0;
  setCamera(root, false);

  // 后续遍历，需要知道从底开始遍历各个节点的状态
  // 该函数返回每个节点的状态，根节点根据左右节点状态来设置自身的状态
  // 定义三个状态-1为当前节点为null 0为当前节点状态未被cover 1为当前节点被cover 2为当前节点状态放置摄像头
  function setCamera(root, hasParent) {
    if (root === null) return -1;

    const left = setCamera(root.left, true);
    const right = setCamera(root.right, true);

    if (left === -1 && right === -1) {
      if (hasParent) {
        return 0;
      }
      res++;
      return 2;
    }

    // 左右子树存在节点没有被cover
    if (left === 0 || right === 0) {
      res++;
      return 2;
    }

    // 左右子树只要有一个设置摄像头了当前节点就被cover了
    if (left === 2 || right === 2) {
      return 1;
    }

    // 剩下left === 1 && right === 1的情况
    // 如果有父节点可以等父节点cover自己
    if (hasParent) {
      return 0;
    } else {
      res++;
      return 2;
    }
  }
  return res;
};
// @lc code=end
