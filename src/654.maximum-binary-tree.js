/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
 var constructMaximumBinaryTree = function(nums) {
  if(!nums || nums.length === 0) return null
  let max = Number.MIN_VALUE;
  let index = -1
  for(let i = 0; i < nums.length; i++) {
      if(nums[i] > max) {
          index = i
          max = nums[i]
      }
  }

  const root = new TreeNode(max);
  root.left = constructMaximumBinaryTree(nums.slice(0, index))
  root.right = constructMaximumBinaryTree(nums.slice(index + 1, nums.length));
  return root
};

console.log(constructMaximumBinaryTree([3,2,1,6,0,]))