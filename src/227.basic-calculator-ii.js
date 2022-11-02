/*
 * @lc app=leetcode id=227 lang=javascript
 *
 * [227] Basic Calculator II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  s = s.trim();
  let num = 0;
  const n = s.length;
  const stack = [];
  let preSign = "+";

  for (let i = 0; i < n; i++) {
    if (!isNaN(Number(s[i])) && s[i] !== " ") {
      num = num * 10 + Number(s[i]);
    }
    // 遇到下一个符号时计算
    if (isNaN(Number(s[i])) || i === n - 1) {
      switch (preSign) {
        case "+":
          stack.push(num);
          break;
        case "-":
          stack.push(-num);
          break;
        case "*":
          stack.push(stack.pop() * num);
          break;
        case "/":
          console.log(stack, num);
          stack.push((stack.pop() / num) | 0);
          break;
      }
      preSign = s[i];
      num = 0;
    }
  }
  let ans = 0;
  for (const num of stack) {
    ans += num;
  }
  return ans;
};
// @lc code=en
