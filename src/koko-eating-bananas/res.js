/**
 * @param {number[]} piles
 * @param {number} H
 * @return {number}
 */
var minEatingSpeed = function (piles, H) {
  let left = 1;
  let right = getMax(piles) + 1;
  while (left < right) {
    const mid = parseInt(left + (right - left) / 2);

    if (canfinished(piles, mid, H)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
};

function getMax(piles) {
  let max = Number.MIN_VALUE;

  for (let i = 0; i < piles.length; i++) {
    max = piles[i] > max ? piles[i] : max;
  }
  return max;
}

function canfinished(piles, speed, H) {
  let time = 0;
  for (let i = 0; i < piles.length; i++) {
    time = time +  Math.floor(piles[i] / speed) + (piles[i] % speed > 0 ? 1 : 0);
  }
  return time <= H;
}

console.log(minEatingSpeed([3, 6, 7, 11], 8));
