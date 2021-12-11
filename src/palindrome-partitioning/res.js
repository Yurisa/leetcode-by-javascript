/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const result = [];
  backtrack(s, []);
  function backtrack(str, arr) {
    if (!str && arr.join('') === s) {
      result.push(arr);
      return;
    }

    for (let i = 0; i < str.length; i++) {
      const subStr = str.substr(0, i + 1);
      // const subStr2 = s.substr(i + 1);
      if (isPalindrome(subStr)) {
        backtrack(str.substr(i + 1), arr.concat(subStr));
      }
    }
  }

  return result;
};

function isPalindrome(s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

// console.log(isPalindrome('ab'))
console.log(partition("a"));
