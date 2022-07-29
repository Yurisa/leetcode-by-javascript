/*
 * @lc app=leetcode id=232 lang=javascript
 *
 * [232] Implement Queue using Stacks
 */

// @lc code=start

var MyQueue = function () {
  this.inStack = [];
  this.outStack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.inStack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (this.outStack.length === 0) {
    if (this.inStack.length === 0) {
      return -1;
    }
    this.in2out();
  }
  return this.outStack.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (this.outStack.length === 0) {
    if (this.inStack.length === 0) {
      return -1;
    }
    this.in2out();
  }
  return this.outStack[this.outStack.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.inStack.length === 0 && this.outStack.length === 0;
};

MyQueue.prototype.in2out = function () {
  while (this.inStack.length > 0) {
    this.outStack.push(this.inStack.pop());
  }
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end
