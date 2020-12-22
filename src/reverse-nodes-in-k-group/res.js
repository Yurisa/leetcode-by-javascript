/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  if (head == null) return head;
  // 区间 [a, b) 包含 k 个待反转元素
  let a = head;
  let b = head;
  for (let i = 0; i < k; i++) {
    // 不足 k 个，不需要反转，base case
    if (b === null) return head;
    b = b.next;
  }

  const newHead = reverse(a, b);

  a.next = reverseKGroup(b, k);
  return newHead;
};

function reverse(a, b) {
  let pre = null;
  let cur = a;

  while (cur !== b) {
    const next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return pre;
}
