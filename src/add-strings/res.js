/*
 * @lc app=leetcode id=415 lang=javascript
 *
 * [415] Add Strings
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 var addStrings = function (num1, num2) {
  let ans = '';
  let i = num1.length - 1;
  let j = num2.length - 1;

  let carry = 0;
  while (i >= 0 || j >= 0 || carry !== 0) {
    let val1 = i >= 0 ? Number(num1[i]) : 0;
    let val2 = j >= 0 ? Number(num2[j]) : 0;

    let sum = val1 + val2 + carry;
    if (sum >= 10) {
      carry = 1;
    } else {
      carry = 0;
    }
    ans = (sum % 10) + ans;
    i--;
    j--;
  }
  return ans;
};
// @lc code=end
