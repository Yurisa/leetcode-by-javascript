/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
  if(points.length === 0) return 0
  
  points.sort((a, b) => {
      return a[1] - b[1]
  })
  let count = 1
  let x_end = points[0][1]
  for(let i = 0; i < points.length; i++) {
      const point = points[i]
      const start = point[0]
      if(start > x_end) {
          count++
          x_end = point[1]
      }
  }
  return count
};