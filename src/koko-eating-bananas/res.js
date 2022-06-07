/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
 var minEatingSpeed = function(piles, h) {
  let l = 1;
  let r = getMax(piles) + 1
  while(l < r) {
      let mid =  l + r >> 1;
      if(canfinished(piles, mid, h)) {
          r = mid;
      } else {
          l = mid + 1
      }
  }
  return l
};

function getMax(piles) {
  let max = piles[0];
  for(let i =1; i < piles.length; i++) {
      if(piles[i] > max) {
          max = piles[i]
      }
  }
  return max
}

function canfinished(piles, speed, h) {
let time = 0
for(const pile of piles) {
   time = time + Math.floor(pile / speed) + (pile % speed > 0 ? 1 : 0)
}
return time <= h
}