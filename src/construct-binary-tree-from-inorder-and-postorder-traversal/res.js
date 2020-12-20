/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  function build(inorder, inStart, inEnd, postorder, postStart, postEnd) {
    if (postStart > postEnd) return null;

    const rootValue = postorder[postEnd];
    let index = 0;

    for (let i = inStart; i <= inEnd; i++) {
      if (inorder[i] === rootValue) {
        index = i;
        break;
      }
    }

    const root = new TreeNode(rootValue);
    const leftSize = index - inStart;

    root.left = build(
      inorder,
      inStart,
      index - 1,
      postorder,
      postStart,
      postStart + leftSize - 1
    );
    root.right = build(
      inorder,
      index + 1,
      inEnd,
      postorder,
      postStart + leftSize,
      postEnd - 1
    );
    return root;
  }

  const len = inorder.length;
  if (len === 0) return null;

  return build(inorder, 0, len - 1, postorder, 0, len - 1);
};
