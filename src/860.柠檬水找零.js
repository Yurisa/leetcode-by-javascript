/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  if (bills.length === 0) return true;
  if (bills[0] > 5) return false;
  let num5 = 0;
  let num10 = 0;
  for (let i = 0; i < bills.length; i++) {
    if (bills[i] === 5) {
      num5++;
    } else if (bills[i] === 10) {
      if (num5 < 1) return false;
      num10++;
      num5--;
    } else {
      if (num5 >= 1 && num10 >= 1) {
        //如果既有3张5块，又有1张10块，那么应该优先给一张10块和一张5块
        num5--;
        num10--;
      } else if (num5 >= 3) {
        num5 -= 3;
      } else return false;
    }
  }
  return true;
};
// @lc code=end
