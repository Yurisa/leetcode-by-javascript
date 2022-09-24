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
  const m = num1.length;
  const n = num2.length;

  let carry = 0;
  let i = m - 1;
  let j = n - 1;
  let ans = "";
  while (i >= 0 || j >= 0 || carry !== 0) {
    let a = i >= 0 ? Number(num1[i]) : 0;
    let b = j >= 0 ? Number(num2[j]) : 0;
    let temp = a + b + carry;
    carry = 0;
    if (temp >= 10) {
      carry = 1;
      temp = temp % 10;
    }
    ans = temp + ans;
    i--;
    j--;
  }
  return ans;
};
// @lc code=end
