/*
 * @lc app=leetcode id=732 lang=javascript
 *
 * [732] My Calendar III
 */

// @lc code=start

var MyCalendarThree = function () {
  this.tree = new Map();
  this.lazy = new Map();
};

MyCalendarThree.prototype.update = function (start, end, l, r, idx) {
  if (start > r || end < l) {
    return;
  }

  //剩余 start <= r && end >= l
  // 如果是区间完全覆盖的场景那么懒标记+1根节点+1
  if (start <= l && end >= r) {
    this.tree.set(idx, (this.tree.get(idx) || 0) + 1);
    this.lazy.set(idx, (this.lazy.get(idx) || 0) + 1);
  } else {
    // 如果是包含或者相交的节点
    const mid = (l + r) >> 1;
    // 默认把mid归到左节点上
    this.update(start, end, l, mid, 2 * idx);
    this.update(start, end, mid + 1, r, 2 * idx + 1);
    // 后续遍历处理完叶子节点之后处理根节点，根节点即为预定次数
    this.tree.set(
      idx,
      (this.lazy.get(idx) || 0) +
        Math.max(this.tree.get(2 * idx) || 0, this.tree.get(2 * idx + 1) || 0)
    );
  }
};

/**
 * @param {number} start
 * @param {number} end
 * @return {number}
 */
MyCalendarThree.prototype.book = function (start, end) {
  // 开区间所以要-1构造【0,1000000000]的线段树
  this.update(start, end - 1, 0, 1000000000, 1);
  return this.tree.get(1) || 0;
};

/**
 * Your MyCalendarThree object will be instantiated and called as such:
 * var obj = new MyCalendarThree()
 * var param_1 = obj.book(start,end)
 */
// @lc code=end
