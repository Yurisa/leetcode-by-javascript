/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  const arr = [];
  lists.forEach((item) => {
    while (item) {
      arr.push(item.val);
      item = item.next;
    }
  });

  arr.sort((a, b) => a - b);

  let dummy = new ListNode(0);
  let p = dummy;
  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];
    let next = new ListNode(null);
    next.val = val;
    p.next = next;
    p = p.next;
  }
  return dummy.next;
};
// @lc code=end
