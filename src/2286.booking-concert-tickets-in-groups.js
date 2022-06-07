/*
 * @lc app=leetcode id=2286 lang=javascript
 *
 * [2286] Booking Concert Tickets in Groups
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} m
 */
 var BookMyShow = function (n, m) {
  this.n = n;
  this.m = m;
  this.min = new Array(4 * n).fill(0);
  this.sum = new Array(4 * n).fill(0);
};

// 返回区间 [1,R] 中 <= val 的最靠左的位置，不存在时返回 0
BookMyShow.prototype.index = function (o, l, r, R, val) {
  if (this.min[o] > val) return 0; // 说明整个区间的元素值都大于 val
  if (l == r) return l;
  const m =  l + r >> 1;
  if (this.min[o * 2] <= val) return this.index(o * 2, l, m, R, val); // 看看左半部分
  if (m < R) return this.index(o * 2 + 1, m + 1, r, R, val); // 看看右半部分
  return 0;
};

// 返回区间 [L,R] 内的元素和
BookMyShow.prototype.query_sum = function (o, l, r, L, R) {
  if (L <= l && r <= R) return this.sum[o];
  let sum = 0;
  const m = l + r >> 1;
  if (L <= m) sum += this.query_sum(o * 2, l, m, L, R);
  if (R > m) sum += this.query_sum(o * 2 + 1, m + 1, r, L, R);
  return sum;
};

// 将idx上的元素值增加val
BookMyShow.prototype.add = function (o, l, r, idx, val) {
  // 到达叶子节点
  if (l == r) {
    this.min[o] += val;
    this.sum[o] += val;
    return;
  }
  let m = l + r >> 1
  if (idx <= m) this.add(o * 2, l, m, idx, val);
  else this.add(o * 2 + 1, m + 1, r, idx, val);
  // 后续遍历，得到子节点的min和sum值后求父节点min和sum值
  this.min[o] = Math.min(this.min[o * 2], this.min[o * 2 + 1]);
  this.sum[o] = this.sum[o * 2] + this.sum[o * 2 + 1];
};
/**
 * @param {number} k
 * @param {number} maxRow
 * @return {number[]}
 */
BookMyShow.prototype.gather = function (k, maxRow) {
  const i = this.index(1, 1, this.n, maxRow + 1, this.m - k);
  if (i == 0) return []; // 不存在
  const seats = this.query_sum(1, 1, this.n, i, i);
  this.add(1, 1, this.n, i, k); // 占据 k 个座位
  return [i - 1, seats];
};

/**
 * @param {number} k
 * @param {number} maxRow
 * @return {boolean}
 */
BookMyShow.prototype.scatter = function (k, maxRow) {
  if ((maxRow + 1) * this.m - this.query_sum(1, 1, this.n, 1, maxRow + 1) < k)
    return false; // 剩余座位不足 k 个
  // 从第一个没有坐满的排开始占座,至少能坐下1个座位
  for (let i = this.index(1, 1, this.n, maxRow + 1, this.m - 1); ; ++i) {
    var left_seats = this.m - this.query_sum(1, 1, this.n, i, i);
    if (k <= left_seats) {
      // 剩余人数不够坐后面的排
      this.add(1, 1, this.n, i, k);
      return true;
    }
    k -= left_seats;
    this.add(1, 1, this.n, i, left_seats);
  }
};

/**
 * Your BookMyShow object will be instantiated and called as such:
 * var obj = new BookMyShow(n, m)
 * var param_1 = obj.gather(k,maxRow)
 * var param_2 = obj.scatter(k,maxRow)
 */
// @lc code=end
