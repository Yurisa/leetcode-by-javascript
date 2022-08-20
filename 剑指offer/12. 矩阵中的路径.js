/*
 * @lc app=leetcode id=79 lang=javascript
 *
 * [79] Word Search
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const m = board.length;
  const n = board[0].length;

  const visited = new Array(m);
  for (let i = 0; i < m; i++) {
    visited[i] = new Array(n).fill(false);
  }

  // i代表记录当前word的长度
  function check(row, col, i) {
    if (i === word.length) return true;
    if (row < 0 || row >= m || col < 0 || col >= n) {
      return false;
    }

    if (visited[row][col]) return false;
    if (word[i] !== board[row][col]) return false;
    visited[row][col] = true;

    const canFind =
      check(row + 1, col, i + 1) ||
      check(row - 1, col, i + 1) ||
      check(row, col + 1, i + 1) ||
      check(row, col - 1, i + 1);

    if (canFind) {
      return true;
    }
    visited[row][col] = false;
    return false;
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (word[0] === board[i][j] && check(i, j, 0)) {
        return true;
      }
    }
  }
  return false;
};
// @lc code=end
