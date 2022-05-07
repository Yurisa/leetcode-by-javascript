/*
 * @lc app=leetcode id=394 lang=javascript
 *
 * [394] Decode String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
 var decodeString = function (s) {
  // 数字栈
  const mutiStack = [];
  // 字符串栈
  const strStack = [];
  let num = 0;
  let ret = '';

  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (!isNaN(c)) {
      num = num * 10 + Number(c);
    } else if (c === '[') {
      mutiStack.push(num);
      num = 0;
      strStack.push(ret);
      ret = '';
    } else if (c === ']') {
      ret = strStack.pop() + ret.repeat(mutiStack.pop());
    } else {
      ret += c;
    }
  }
  return ret;
};
// @lc code=end
