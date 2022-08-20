/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
  let prev = null;
  let p = head;
  while (p !== null) {
    let next = p.next;
    p.next = prev;
    prev = p;
    p = next;
  }
  let res = [];
  let p2 = prev;
  while (p2 !== null) {
    res.push(p2.val);
    p2 = p2.next;
  }
  return res;
};
