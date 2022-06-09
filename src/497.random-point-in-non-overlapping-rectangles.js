/**
 * @param {number[][]} rects
 */
var Solution = function (rects) {
  this.rs = rects;
  this.n = rects.length;
  // 前i个矩形面积和
  this.sum = new Array(this.n + 1).fill(0);
  for (let i = 1; i <= this.n; i++) {
    // 长度为坐标相减 + 1
    this.sum[i] =
      this.sum[i - 1] +
      (this.rs[i - 1][2] - this.rs[i - 1][0] + 1) *
        (this.rs[i - 1][3] - this.rs[i - 1][1] + 1);
  }
};

/**
 * @return {number[]}
 */
Solution.prototype.pick = function () {
  const val = parseInt(Math.random() * this.sum[this.n]) + 1;
  let l = 0;
  let r = this.n;
  while (l < r) {
    const m = (l + r) >> 1;
    if (this.sum[m] < val) l = m + 1;
    else if (this.sum[m] >= val) r = m;
  }
  const cur = this.rs[r - 1];
  const x = cur[0] + parseInt(Math.random() * (cur[2] - cur[0] + 1));
  const y = cur[1] + parseInt(Math.random() * (cur[3] - cur[1] + 1));
  return [x, y];
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(rects)
 * var param_1 = obj.pick()
 */
