const map = {
  0: [],
  1: [],
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};

var letterCombinations = function (digits) {
  const result = [];
  if (!digits || !digits.length) return [];

  const len = digits.length;

  backtrack(digits, "");

  function backtrack(digits, str) {
    if (digits.length === 0) {
      result.push(str);
      return;
    }
    const chars = map[digits[0]];
    const newDigits = digits.substr(1);

    for (let i = 0; i < chars.length; i++) {
      backtrack(newDigits, str + chars[i]);
    }
  }

  return result;
};
