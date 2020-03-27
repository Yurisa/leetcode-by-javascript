/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) return [];

  const ret = [];

  let level = 0;
  const queue = [root];

  while (queue.length) {
    let levelSize = queue.length;
    const levelArr = [];

    while (levelSize--) {
      const node = queue.shift();
      levelArr.push(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    ret.push(levelArr);
  }

  return ret;
};

var levelOrder = function(root) {
  if (!root) return [];
  const ret = [];
  _dfs(root, 0);

  function _dfs(root, level) {
    if (!root) return;

    if (ret.length < level + 1) {
      ret[level] = [];
    }
    ret[level].push(root.val);

    _dfs(root.left, level + 1);
    _dfs(root.right, level + 1);
  }

  return ret;
};
