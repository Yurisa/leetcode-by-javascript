/*
 * @lc app=leetcode.cn id=857 lang=javascript
 *
 * [857] 雇佣 K 名工人的最低成本
 */

// @lc code=start
/**
 * @param {number[]} quality
 * @param {number[]} wage
 * @param {number} k
 * @return {number}
 */
class Heap {
  constructor(data, compare) {
    this.data = data;
    this.compare = compare;

    for (let i = (data.length >> 1) - 1; i >= 0; i--) {
      this.heapify(i);
    }
  }
  heapify(index) {
    let target = index;
    let left = index * 2 + 1;
    let right = index * 2 + 2;
    if (
      left < this.data.length &&
      this.compare(this.data[left], this.data[target])
    ) {
      target = left;
    }
    if (
      right < this.data.length &&
      this.compare(this.data[right], this.data[target])
    ) {
      target = right;
    }
    if (target !== index) {
      this.swap(target, index);
      this.heapify(target);
    }
  }
  swap(l, r) {
    let data = this.data;
    [data[l], data[r]] = [data[r], data[l]];
  }
  push(item) {
    this.data.push(item);
    let index = this.data.length - 1;
    let father = ((index + 1) >> 1) - 1;
    while (father >= 0) {
      if (this.compare(this.data[index], this.data[father])) {
        this.swap(index, father);
        index = father;
        father = ((index + 1) >> 1) - 1;
      } else {
        break;
      }
    }
  }
  pop() {
    this.swap(0, this.data.length - 1);
    let ret = this.data.pop();
    this.heapify(0);
    return ret;
  }
}

var mincostToHireWorkers = function (quality, wage, k) {
  let arr = quality.map((item, index) => {
    return {
      ratio: item / wage[index],
      quality: item,
    };
  });
  // 性价比 由 高 到 低
  arr.sort((a, b) => b.ratio - a.ratio);
  // 工作质量大顶堆
  let pq = new Heap([], (lower, higher) => {
    return lower > higher;
  });
  let index = 0;
  let sum = 0;
  let ret = Infinity;
  while (index < arr.length) {
    if (pq.data.length < k) {
      pq.push(arr[index].quality);
      sum += arr[index].quality;
    }
    // 当前的比率一定都能满足..
    if (pq.data.length == k) {
      ret = Math.min(ret, (1 / arr[index].ratio) * sum);
      sum -= pq.pop();
    }
    index++;
  }
  return ret;
};
// @lc code=end
