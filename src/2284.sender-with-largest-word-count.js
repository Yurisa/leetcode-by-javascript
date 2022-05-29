/*
 * @lc app=leetcode id=2284 lang=javascript
 *
 * [2284] Sender With Largest Word Count
 */

// @lc code=start
 /**
  * @param {string[]} messages
  * @param {string[]} senders
  * @return {string}
  */
 var largestWordCount = function(messages, senders) {
     const n = senders.length
     const map = {}
     for(let i = 0; i < n; i++) {
         if(!map[senders[i]]) {
             map[senders[i]] = 0
         }
         map[senders[i]] += messages[i].split(' ').length
     }
     const arr = Object.keys(map)
     arr.sort().reverse()
     let res = ''
     let max = 0
    arr.forEach(name => {
        if(map[name] > max) {
            max = map[name]
            res= name
        }
     })
     return res
 };
// @lc code=end

