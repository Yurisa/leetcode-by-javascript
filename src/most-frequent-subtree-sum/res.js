/*
 * @lc app=leetcode id=508 lang=javascript
 *
 * [508] Most Frequent Subtree Sum
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
 * @return {number[]}
 */
var findFrequentTreeSum = function (root) {
  const frequntCounts = {};
  const countsMap = {}
  sum(root);


  function sum(root) {
    if (root === null) {
      return 0;
    }

    const leftSum = sum(root.left);
    const rightSum = sum(root.right);
    const total = root.val + leftSum + rightSum;
    frequntCounts[total] = (frequntCounts[total] || 0) + 1;
    return total;
  }

  Object.keys(frequntCounts).forEach((key) => {
    if (!countsMap[frequntCounts[key]]) {
      countsMap[frequntCounts[key]] = [];
    }
    countsMap[frequntCounts[key]].push(key);
  });
  const sortedList = Object.keys(countsMap).sort((a, b) => b - a);
  return countsMap[sortedList[0]];
};

// @lc code=end
