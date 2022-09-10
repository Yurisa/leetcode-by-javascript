/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
 */

// @lc code=start
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
  const stack = [];
  const dummy = new ListNode(0);
  p = dummy;
  while (true) {
    let cnt = 0;
    let tmp = head;
    while (cnt < k && tmp) {
      stack.push(tmp);
      cnt++;
      tmp = tmp.next;
    }

    if (cnt < k) {
      p.next = head;
      break;
    }

    while (stack.length > 0) {
      const node = stack.pop();
      p.next = node;
      p = p.next;
    }
    head = tmp;
  }
  return dummy.next;
};
// @lc code=end
