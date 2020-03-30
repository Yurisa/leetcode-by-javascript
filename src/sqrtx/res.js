/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if(x === 0 || x === 1) {
       return x
  }
   
   let [l, r] = [0, x]
   
   while(l < r) {
       const mid = parseInt((l + r) / 2)
       
       if(mid * mid === x) {
           return mid
       } else if(mid * mid > x) {
           r = mid - 1
       } else {
           l = mid + 1
       }
   }
   return x < r * r ? r - 1 : r; 
   
};