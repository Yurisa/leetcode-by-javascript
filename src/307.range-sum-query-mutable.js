/*
 * @lc app=leetcode id=307 lang=javascript
 *
 * [307] Range Sum Query - Mutable
 */

// @lc code=start
/**
 * @param {number[]} nums
 */

class Node {
  constructor(start, end) {
    this.start = start;
    this.end = end;
    this.val = 0;
    this.left = null;
    this.right = null;
  }
}
class SegmentTree {
  constructor(start, end) {
    this.root = new Node(start, end);
  }

  update(i, val) {
    this.updateNode(this.root, i, val);
  }

  updateNode(node, i, val) {
    if (!node) return;
    if (node.end < start || node.start > end) {
      return;
    } else if (start <= node.start && node.end <= end) {
      node.val = node.end - node.start + 1;
      return;
    } else {
      this.pushdown(node);
      this.updateNode(node.left, start, end);
      this.updateNode(node.right, start, end);
      this.pushup(node);
    }
  }

  pushup(node) {
    node.val = node.left.val + node.right.val;
  }

  pushdown(node) {
    if (!node) return;
    const mid = Math.floor((node.start + node.end) / 2);
    if (!node.left) {
      node.left = new Node(node.start, mid);
    }
    if (!node.right) {
      node.right = new Node(mid + 1, node.end);
    }
    if (node.val === node.end - node.start + 1) {
      node.left.val = mid - node.start + 1;
      node.right.val = node.end - mid;
    }
  }

  query(start, end) {
    return this.queryNode(this.root, start, end);
  }

  queryNode(node, start, end) {
    if (!node) return 0;

    if (start > node.end || end < node.start) {
      return 0;
    } else if (start <= node.start && end >= node.end) {
      return node.val;
    } else {
      this.pushdown(node);
      return (
        this.queryNode(node.left, start, end) +
        this.queryNode(node.right, start, end)
      );
    }
  }
}

var NumArray = function (nums) {
  const n = nums.length;
  this.tree = new SegmentTree(0, n - 1);
  for (let i = 0; i < n; i++) {
    this.tree.update(i, nums[i]);
  }
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function (index, val) {};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */
// @lc code=end
