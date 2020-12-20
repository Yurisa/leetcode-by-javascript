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
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  function build(preoder, preStart, preEnd, inorder, inStart, inEnd) {
      
     if(preStart > preEnd) return null

    const rootValue = preoder[preStart];
    let index = 0;
    // 中序遍历根节点位置
    for (let i = inStart; i <= inEnd; i++) {
      if (inorder[i] === rootValue) {
        index = i;
        break;
      }
    }

    const root = new TreeNode(rootValue)
    const leftSize = index - inStart;

    root.left = build(
      preoder,
      preStart + 1,
      preStart + leftSize,
      inorder,
      inStart,
      index - 1
    );

    root.right = build(
      preoder,
      preStart + 1 + leftSize,
      preEnd,
      inorder,
      index + 1,
      inEnd
    );

    return root;
  }

  const len = preorder.length;
  if (len === 0) return null;

  return build(preorder, 0, len - 1, inorder, 0, len - 1);
};
