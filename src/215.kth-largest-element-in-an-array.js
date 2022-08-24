/*
 * @lc app=leetcode id=215 lang=javascript
 *
 * [215] Kth Largest Element in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const minHeap = new MinHeap();

  for (let i = 0; i < k; i++) {
    minHeap.add(nums[i]);
  }

  for (let i = k; i < nums.length; i++) {
    const min = minHeap.getMin();
    if (nums[i] > min) {
      minHeap.replace(nums[i]);
    }
  }
  return minHeap.getMin();
};

class MinHeap {
  data = [];
  constructor() {}

  get size() {
    return this.data.length;
  }

  add(item) {
    this.data.push(item);
    this.siftUp(this.data.length - 1);
  }

  replace(item) {
    this.data[0] = item;
    this.siftDown(0);
  }

  getMin() {
    if (!this.data.length) return null;
    return this.data[0];
  }

  getParent(i) {
    return Math.floor((i - 1) / 2);
  }

  getLeft(i) {
    return 2 * i + 1;
  }

  getRight(i) {
    return 2 * i + 2;
  }

  siftUp(i) {
    let k = i;
    while (k > 0 && this.data[this.getParent(k)] > this.data[k]) {
      this.swap(k, this.getParent(k));
      k = this.getParent(k);
    }
  }

  siftDown(i) {
    let k = i;
    while (this.getLeft(k) < this.size) {
      const left = this.getLeft(k);
      let p = left;
      let right = left + 1;
      if (right < this.size && this.data[right] < this.data[left]) {
        p = right;
      }

      if (this.data[p] > this.data[k]) break;
      this.swap(p, k);
      k = p;
    }
  }

  swap(i, j) {
    [this.data[i], this.data[j]] = [this.data[j], this.data[i]];
  }
}
// @lc code=end
