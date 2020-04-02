/**
 * Initialize your data structure here.
 */
var Trie = function(val = '') {
  this.val = {}
  this.children = {}
  this.isEnd = false  
};

/**
* Inserts a word into the trie. 
* @param {string} word
* @return {void}
*/
Trie.prototype.insert = function(word) {
  let _this = this
  for(let char of word) {
      if(!_this.children[char]) {
          _this.children[char] = new Trie(char)
      }
      _this = _this.children[char]
  }
  _this.isEnd = true
};

/**
* Returns if the word is in the trie. 
* @param {string} word
* @return {boolean}
*/
Trie.prototype.search = function(word, skipEnd = false) {
  let _this = this
  for(let char of word) {
      if(!_this.children[char]) {
          return false
      }
      _this = _this.children[char]
  }
  return skipEnd ? true : _this.isEnd
};

/**
* Returns if there is any word in the trie that starts with the given prefix. 
* @param {string} prefix
* @return {boolean}
*/
Trie.prototype.startsWith = function(prefix) {
  return this.search(prefix, true)
};

/** 
* Your Trie object will be instantiated and called as such:
* var obj = new Trie()
* obj.insert(word)
* var param_2 = obj.search(word)
* var param_3 = obj.startsWith(prefix)
*/