/*
 * @lc app=leetcode id=234 lang=javascript
 *
 * [234] Palindrome Linked List
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
 * @return {boolean}
 */
 var isPalindrome = function(head) {
  let fast = head;
  let slow = head;
  let pre = null;
  let prepre = null

  while(fast !== null && fast.next !== null) {
      prepre = pre
      pre = slow
      slow = slow.next;
      fast = fast.next.next;
      pre.next = prepre
  }
  // 奇数
  if(fast !== null) {
      slow = slow.next
  } 
  
 
  while(pre !== null && slow !== null) {
      if(pre.val !== slow.val) {
          return false
      }
      slow = slow.next;
      pre = pre.next
  }
  return true
};
// @lc code=end

