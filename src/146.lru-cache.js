/*
 * @lc app=leetcode id=146 lang=javascript
 *
 * [146] LRU Cache
 */

// @lc code=start
/**
 * @param {number} capacity
 */
 var LRUCache = function(capacity) {
  this.cache = new Map()
  this.capacity = capacity;
};

/** 
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function(key) {
  if(this.cache.has(key)) {
    let v = this.cache.get(key)
    this.cache.delete(key)
    this.cache.set(key, v)
    return v
  }
  return -1
};

/** 
* @param {number} key 
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function(key, value) {
if(this.cache.has(key)) {
  this.cache.delete(key)
}
this.cache.set(key, value)

// 判断是不是容量超了，淘汰机制 保证后加入的是最新的 每次都删除头部的
if (this.cache.size > this.capacity) {
  this.cache.delete(this.cache.keys().next().value)
}
};

/** 
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/
// @lc code=end

