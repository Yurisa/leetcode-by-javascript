/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
  let p = head;
  const node = new ListNode(0);
  node.next = head;
  let prev = node;
  while (p !== null) {
    if (p.val === val) {
      prev.next = p.next;
    }
    prev = p;
    p = p.next;
  }
  return node.next;
};
