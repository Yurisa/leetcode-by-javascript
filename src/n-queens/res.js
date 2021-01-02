/**
 * @param {number} n
 * @return {string[][]}
 */

var solveNQueens = function (n) {
  const ret = [];
  const board = Array.from({ length: n }, (x) =>
    Array.from({ length: n }, (y) => '.')
  );

  backtrack(board, 0);

  function backtrack(board, row) {
    if (row === board.length) {
      const tmp = [...board];
      for (let i = 0; i < tmp.length; i++) {
        tmp[i] = tmp[i].join('');
      }
      ret.push(tmp);
      return;
    }

    const n = board[row].length;
    for (let col = 0; col < n; col++) {
      // 排除不合法
      if (!isValid(board, row, col)) continue;

      // 做选择
      board[row][col] = 'Q';

      backtrack(board, row + 1);

      board[row][col] = '.';
    }
  }

  function isValid(board, row, col) {
    const n = board.length;

    for (let i = 0; i < n; i++) {
      if (board[i][col] === 'Q') return false;
    }

    // 右上角
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (board[i][j] === 'Q') return false;
    }

    // 左上方
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === 'Q') return false;
    }

    return true;
  }
  return ret;
};
